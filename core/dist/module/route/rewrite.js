import { addDefaultLocaleToPath, findDomainLocale } from "./locale";
import { compileDestination, matchPath } from "../match";
import { handlePageReq } from "../route/page";
/**
 * Get the rewrite of the given path, if it exists.
 * @param uri
 * @param pageManifest
 * @param routesManifest
 */
export function getRewritePath(req, uri, routesManifest, pageManifest) {
    const path = addDefaultLocaleToPath(uri, routesManifest, findDomainLocale(req, routesManifest));
    const rewrites = routesManifest.rewrites;
    for (const rewrite of rewrites) {
        const match = matchPath(path, rewrite.source);
        if (!match) {
            continue;
        }
        const params = match.params;
        const destination = compileDestination(rewrite.destination, params);
        if (!destination) {
            return;
        }
        // No-op rewrite support for pages: skip to next rewrite if path does not map to existing non-dynamic and dynamic routes
        if (pageManifest && path === destination) {
            const url = handlePageReq(req, destination, pageManifest, routesManifest, false, true);
            if (url.statusCode === 404) {
                continue;
            }
        }
        // Pass unused params to destination
        // except nextInternalLocale param since it's already in path prefix
        const querystring = Object.keys(params)
            .filter((key) => key !== "nextInternalLocale")
            .filter((key) => !rewrite.destination.endsWith(`:${key}`) &&
            !rewrite.destination.includes(`:${key}/`))
            .map((key) => {
            const param = params[key];
            if (typeof param === "string") {
                return `${key}=${param}`;
            }
            else {
                return param.map((val) => `${key}=${val}`).join("&");
            }
        })
            .filter((key) => key)
            .join("&");
        if (querystring) {
            const separator = destination.includes("?") ? "&" : "?";
            return `${destination}${separator}${querystring}`;
        }
        return destination;
    }
}
export function isExternalRewrite(customRewrite) {
    return (customRewrite.startsWith("http://") || customRewrite.startsWith("https://"));
}
