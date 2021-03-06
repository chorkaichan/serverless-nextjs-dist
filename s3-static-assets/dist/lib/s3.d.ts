import AWS from "aws-sdk";
declare type S3ClientFactoryOptions = {
    bucketName: string;
    bucketRegion: string;
    credentials: Credentials;
};
declare type UploadFileOptions = {
    filePath: string;
    cacheControl?: string;
    s3Key?: string;
};
declare type DeleteFilesByPatternOptions = {
    prefix: string;
    pattern: RegExp;
    excludePattern?: RegExp;
};
declare type GetFileOptions = {
    key: string;
};
export declare type S3Client = {
    uploadFile: (options: UploadFileOptions) => Promise<AWS.S3.ManagedUpload.SendData>;
    deleteFilesByPattern: (options: DeleteFilesByPatternOptions) => Promise<void>;
    getFile: (options: GetFileOptions) => Promise<string | undefined>;
};
export declare type Credentials = {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
};
declare const _default: ({ bucketName, bucketRegion, credentials }: S3ClientFactoryOptions) => Promise<S3Client>;
export default _default;
