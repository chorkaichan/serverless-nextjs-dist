/// <reference types="node" />
import { IncomingMessage } from "http";
export declare type ObjectResponse = {
    body: Buffer | undefined;
    headers: {
        [key: string]: string | undefined;
    };
    lastModified: string | undefined;
    expires: string | undefined;
    eTag: string | undefined;
    statusCode: number;
    cacheControl: string | undefined;
    contentType: string | undefined;
};
export declare type StorePageOptions = {
    basePath: string;
    revalidate: number;
    html: string;
    buildId: string;
    pageData: any;
    uri: string;
};
export declare type TriggerStaticRegenerationOptions = {
    basePath: string;
    eTag: string | undefined;
    lastModified: string | undefined;
    pagePath: string;
    pageKey: string;
    req: IncomingMessage;
};
/**
 * Platforms should implement this interface which has all methods for retrieving from an object store,
 * storing a page or triggering static regeneration.
 */
export interface PlatformClient {
    /**
     * Get an object from this platform's object store.
     * This can be a page or other file.
     * @param pageKey
     */
    getObject(pageKey: string): Promise<ObjectResponse>;
    /**
     * Trigger static regeneration for this page.
     * @param options
     */
    triggerStaticRegeneration(options: TriggerStaticRegenerationOptions): Promise<{
        throttle: boolean;
    }>;
    /**
     * Store a page into the object store - both HTML and JSON data.
     * @param options
     */
    storePage(options: StorePageOptions): Promise<{
        cacheControl: string | undefined;
        expires: Date | undefined;
    }>;
}
