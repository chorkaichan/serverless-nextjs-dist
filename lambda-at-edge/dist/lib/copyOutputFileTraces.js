"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyOutputFileTraces = void 0;
const normalizeNodeModules_1 = __importDefault(require("@sls-next/core/dist/build/lib/normalizeNodeModules"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const isPathInsideDir_1 = require("./isPathInsideDir");
const copyOutputFileTraces = async ({ serverlessDir, destination, pages }) => {
    const DOT_NEXT = path_1.default.join(serverlessDir, "../");
    const NEXT_SERVER_JS_NFT_JSON = path_1.default.join(DOT_NEXT, "next-server.js.nft.json");
    const nftJsonFiles = [NEXT_SERVER_JS_NFT_JSON].concat(pages.map((f) => `${f}.nft.json`));
    const traces = new Set();
    const readNft = async (nft) => {
        const basePath = path_1.default.dirname(nft);
        try {
            const { files } = (await fs_extra_1.default.readJSON(nft));
            files.forEach((file) => {
                const absolutePath = path_1.default.join(basePath, file);
                traces.add(absolutePath);
            });
        }
        catch (error) {
            return Promise.reject(`Failed to read trace \`${nft}\`. Check that you're using the \`outputFileTracing\` option with Node.js 12.`);
        }
    };
    await Promise.all(nftJsonFiles.map((file) => readNft(file)));
    const isInsideDestination = (0, isPathInsideDir_1.isPathInsideDir)(destination);
    await Promise.all(Array.from(traces)
        .filter((file) => !file.endsWith("package.json"))
        .map((src) => {
        const normalized = (0, normalizeNodeModules_1.default)(src);
        const dest = path_1.default.join(destination, normalized.startsWith("node_modules/")
            ? normalized
            : path_1.default.relative(serverlessDir, src));
        return isInsideDestination(dest)
            ? fs_extra_1.default.copy(src, dest)
            : Promise.resolve();
    }));
};
exports.copyOutputFileTraces = copyOutputFileTraces;
