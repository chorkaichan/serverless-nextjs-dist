import { CoreBuildOptions, Manifest, PageManifest, RoutesManifest } from "types";
import { NextConfig } from "./types";
export declare const ASSETS_DIR = "assets";
/**
 * Core builder class that has common build functions for all platforms.
 */
export default abstract class CoreBuilder {
    protected nextConfigDir: string;
    protected nextStaticDir: string;
    protected dotNextDir: string;
    protected nextTargetDir: string;
    protected outputDir: string;
    protected buildOptions: {
        nextConfigDir: string;
        nextStaticDir: undefined;
        outputDir: string;
        args: string[];
        cwd: string;
        env: {};
        cmd: string;
        domainRedirects: {};
        minifyHandlers: boolean;
        handler: undefined;
        authentication: undefined;
        baseDir: string;
        cleanupDotNext: boolean;
        assetIgnorePatterns: never[];
    };
    constructor(buildOptions?: CoreBuildOptions);
    build(debugMode?: boolean): Promise<void>;
    /**
     * Run prebuild steps which include cleaning up .next and emptying output directories.
     */
    protected preBuild(): Promise<void>;
    /**
     * Platform-specific build steps which include the handlers that are to be deployed.
     * @param manifests
     * @param debugMode
     */
    protected abstract buildPlatform(manifests: {
        imageManifest: Manifest;
        pageManifest: Manifest;
    }, debugMode?: boolean): Promise<void>;
    /**
     * Core build steps. Currently this runs the .next build and packages the assets since they are the same for all platforms.
     * @param debugMode
     */
    buildCore(debugMode?: boolean): Promise<{
        imageManifest: Manifest;
        pageManifest: PageManifest;
    }>;
    protected readPublicFiles(assetIgnorePatterns: string[]): Promise<string[]>;
    protected readPagesManifest(): Promise<{
        [key: string]: string;
    }>;
    /**
     * Check whether this .next/serverless/pages file is a JS file used for runtime rendering.
     * @param pageManifest
     * @param relativePageFile
     */
    protected isSSRJSFile(pageManifest: PageManifest, relativePageFile: string): boolean;
    /**
     * Process and copy RoutesManifest.
     * @param source
     * @param destination
     */
    protected processAndCopyRoutesManifest(source: string, destination: string): Promise<void>;
    /**
     * Get filter function for files to be included in the default handler.
     */
    protected getDefaultHandlerFileFilter(hasAPIRoutes: boolean, pageManifest: PageManifest): (file: string) => boolean;
    /**
     * Copy code chunks generated by Next.js.
     */
    protected copyChunks(handlerDir: string): Promise<void>;
    /**
     * Copy additional JS files needed such as webpack-runtime.js (new in Next.js 12)
     */
    protected copyJSFiles(handlerDir: string): Promise<void>;
    protected readNextConfig(): Promise<NextConfig | undefined>;
    /**
     * Build static assets such as client-side JS, public files, static pages, etc.
     * Note that the upload to S3 is done in a separate deploy step.
     */
    protected buildStaticAssets(pageManifest: PageManifest, routesManifest: RoutesManifest, ignorePatterns: string[]): Promise<[void, ...void[]]>;
    protected cleanupDotNext(shouldClean: boolean): Promise<void>;
}
