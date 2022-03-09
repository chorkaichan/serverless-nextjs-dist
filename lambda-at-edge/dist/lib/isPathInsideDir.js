"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPathInsideDir = void 0;
const path_1 = require("path");
const isPathInsideDir = (dir) => (path) => {
    const relativePath = (0, path_1.relative)(dir, path);
    return (!!relativePath &&
        !relativePath.startsWith("..") &&
        !(0, path_1.isAbsolute)(relativePath));
};
exports.isPathInsideDir = isPathInsideDir;
