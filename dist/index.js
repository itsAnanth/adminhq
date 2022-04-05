"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const http_1 = __importDefault(require("./core/http"));
exports.http = http_1.default;
exports.default = { http: http_1.default };
