"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes_1 = __importDefault(require("./statusCodes"));
class IResponse {
    static status;
}
class Response extends IResponse {
    static error({ message, code }) {
        return JSON.stringify({ success: false, message: message, code: code });
    }
    static success({ message, code }) {
        return JSON.stringify({ success: true, message: message, code: code });
    }
}
Response.status = statusCodes_1.default;
exports.default = Response;
