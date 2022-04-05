"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    static log(...message) {
        console.log('[adminhq]', ...message);
    }
}
exports.default = Logger;
