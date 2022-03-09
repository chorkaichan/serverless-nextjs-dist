"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyRequiredServerFiles = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const isPathInsideDir_1 = require("./isPathInsideDir");
const copyRequiredServerFiles = async ({ nextConfigDir, destination }) => {
    const REQUIRED_SERVER_FILES = path_1.default.join(nextConfigDir, ".next/required-server-files.json");
    try {
        const { files } = (await fs_extra_1.default.readJSON(REQUIRED_SERVER_FILES));
        const isInsideDestination = (0, isPathInsideDir_1.isPathInsideDir)(destination);
        await Promise.all(files.map((file) => {
            const absoluteFile = path_1.default.join(nextConfigDir, file);
            const destinationFile = path_1.default.join(destination, path_1.default.relative(nextConfigDir, absoluteFile));
            return isInsideDestination(destinationFile)
                ? fs_extra_1.default.copy(absoluteFile, destinationFile, { errorOnExist: false })
                : Promise.resolve();
        }));
    }
    catch (error) {
        return Promise.reject(`Failed to process \`required-server-files.json\`. Check that you're using the \`outputFileTracing\` option with Node.js 12.`);
    }
};
exports.copyRequiredServerFiles = copyRequiredServerFiles;
