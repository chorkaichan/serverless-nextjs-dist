"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
function getCustomData(importName, target) {
    return `
module.exports = function(...args) {
  let original = require('./${importName}');
  const finalConfig = {};
  const target = { target: '${target}' };
  if (typeof original === 'function' && original.constructor.name === 'AsyncFunction') {
    // AsyncFunctions will become promises
    original = original(...args);
  }
  if (original instanceof Promise) {
    // Special case for promises, as it's currently not supported
    // and will just error later on
    return original
      .then((originalConfig) => Object.assign(finalConfig, originalConfig))
      .then((config) => Object.assign(config, target));
  } else if (typeof original === 'function') {
    Object.assign(finalConfig, original(...args));
  } else if (typeof original === 'object') {
    Object.assign(finalConfig, original);
  }
  Object.assign(finalConfig, target);
  return finalConfig;
}
  `.trim();
}
function getDefaultData(target) {
    return `module.exports = { target: '${target}' };`;
}
async function createServerlessConfig(workPath, entryPath, useServerlessTraceTarget) {
    const target = useServerlessTraceTarget
        ? "experimental-serverless-trace"
        : "serverless";
    const primaryConfigPath = path_1.default.join(entryPath, "next.config.js");
    const secondaryConfigPath = path_1.default.join(workPath, "next.config.js");
    const backupConfigName = `next.config.original.${Date.now()}.js`;
    const hasPrimaryConfig = fs_extra_1.default.existsSync(primaryConfigPath);
    const hasSecondaryConfig = fs_extra_1.default.existsSync(secondaryConfigPath);
    let configPath;
    let backupConfigPath;
    if (hasPrimaryConfig) {
        // Prefer primary path
        configPath = primaryConfigPath;
        backupConfigPath = path_1.default.join(entryPath, backupConfigName);
    }
    else if (hasSecondaryConfig) {
        // Work with secondary path (some monorepo setups)
        configPath = secondaryConfigPath;
        backupConfigPath = path_1.default.join(workPath, backupConfigName);
    }
    else {
        // Default to primary path for creation
        configPath = primaryConfigPath;
        backupConfigPath = path_1.default.join(entryPath, backupConfigName);
    }
    const configPathExists = fs_extra_1.default.existsSync(configPath);
    if (configPathExists) {
        await fs_extra_1.default.rename(configPath, backupConfigPath);
        await fs_extra_1.default.writeFile(configPath, getCustomData(backupConfigName, target));
    }
    else {
        await fs_extra_1.default.writeFile(configPath, getDefaultData(target));
    }
    return {
        restoreUserConfig: async () => {
            const needToRestoreUserConfig = configPathExists;
            await fs_extra_1.default.remove(configPath);
            if (needToRestoreUserConfig) {
                await fs_extra_1.default.rename(backupConfigPath, configPath);
            }
        }
    };
}
exports.default = createServerlessConfig;
