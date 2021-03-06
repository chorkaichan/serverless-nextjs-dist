"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regenerationHandler = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const utils_1 = require("./utils");
const regenerationHandler = async ({ req, res, regenerationEvent, manifest, platformClient }) => {
    console.log('req:::', req, 'res:::', res, 'regenerationEvent:::', regenerationEvent, 'manifest:::', manifest, 'platformClient:::', platformClient)
    const page = require(`./${regenerationEvent.pagePath}`);
    const { renderOpts, html } = await (0, utils_1.renderPageToHtml)(page, req, res, "passthrough");
    console.log('renderOpts:::', renderOpts, 'html:::', html)
    const normalizedUri = regenerationEvent.pageKey
        .replace(`static-pages/${manifest.buildId}`, "")
        .replace(".js", "");
    console.log('normalizedUri:::', normalizedUri)
    await platformClient.storePage({
        html,
        uri: normalizedUri,
        basePath: regenerationEvent.basePath,
        buildId: manifest.buildId,
        pageData: renderOpts.pageData,
        revalidate: renderOpts.revalidate
    });
};
exports.regenerationHandler = regenerationHandler;
