"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
;
class Server {
    constructor(server, { PORT, methodsPath, autoHandle }) {
        this.methodsPath = methodsPath;
        this.server = server;
        this.methods = new Map();
        this.PORT = PORT || 3000;
        this.autoHandle = autoHandle || true;
        this.init().then(() => this.handleRequests() && (this.autoHandle && this.listenToPort()));
    }
    async init() {
        const methodsPath = fs_1.default.readdirSync(this.methodsPath).map(x => x.toLowerCase()).filter(x => ['get', 'post', 'delete', 'update'].includes(x));
        for (let i = 0; i < methodsPath.length; i++) {
            const method = methodsPath[i];
            const routesPath = fs_1.default.readdirSync(`./methods/${method}`);
            for (let j = 0; j < routesPath.length; j++) {
                const route = (await Promise.resolve().then(() => __importStar(require(`../methods/${method}/${routesPath[j]}`)))).default;
                !this.methods.has(method) && (this.methods.set(method, []));
                (this.methods.get(method).push(route));
            }
        }
    }
    handleRequests() {
        for (const [key, value] of [...this.methods.entries()]) {
            for (let route = 0; route < value.length; route++) {
                const { path, callback } = value[route];
                const ckey = key.toLowerCase();
                // @ts-ignore
                this.server[`${ckey}`].apply(this.server, [path, callback]);
            }
        }
        return true;
    }
    listenToPort() {
        this.server.listen(this.PORT, () => console.log(`[server] server running on port ${this.PORT}`));
    }
}
exports.default = Server;
