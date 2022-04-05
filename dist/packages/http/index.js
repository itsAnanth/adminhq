"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.statusCodes = exports.Response = exports.Server = void 0;
const Endpoint_1 = __importDefault(require("./src/Endpoint"));
exports.Endpoint = Endpoint_1.default;
const Response_1 = __importDefault(require("./src/Response"));
exports.Response = Response_1.default;
const Server_1 = __importDefault(require("./src/Server"));
exports.Server = Server_1.default;
const statusCodes_1 = __importDefault(require("./src/statusCodes"));
exports.statusCodes = statusCodes_1.default;
exports.default = { Server: Server_1.default, Response: Response_1.default, statusCodes: statusCodes_1.default, Endpoint: Endpoint_1.default };
