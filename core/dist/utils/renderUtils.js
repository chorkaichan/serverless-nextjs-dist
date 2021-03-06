"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPageToHtml = void 0;
const utils_1 = require("next/dist/server/utils");
/**
 * Render to HTML helper. Starting in Next.js 11.1 a change was introduced so renderReqToHTML no longer returns a string.
 * See: https://github.com/vercel/next.js/pull/27319
 * This is a helper to properly render it in backwards compatible way.
 * @param page
 * @param req
 * @param res
 * @param renderMode
 */
const renderPageToHtml = async (page, req, res, renderMode) => {
    var _a;
    const { renderOpts, html: htmlResult } = await page.renderReqToHTML(req, res, renderMode);
    console.log('htmlResult:::', htmlResult)
    let html = undefined;
    if (typeof htmlResult === "string") {
        html = htmlResult; // Next.js < 11.1
    }
    else {
        if (htmlResult) {
            html = await ((_a = htmlResult.toUnchunkedString) === null || _a === void 0 ? void 0 : _a.call(htmlResult)); // Next >= 12
            if (!html) {
                try {
                    html = await (0, utils_1.resultsToString)([htmlResult]); // Next >= 11.1.1
                }
                catch (e) {
                    console.log("html could not be rendered using resultsToString().");
                }
            }
        }
    }
    if (!html) {
        console.log("html is empty, falling back to using page's rendering function for html");
        html = (await page.renderReqToHTML(req, res));
    }
    return { html, renderOpts };
};
exports.renderPageToHtml = renderPageToHtml;
