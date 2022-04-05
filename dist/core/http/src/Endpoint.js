"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Endpoint {
    constructor({ path, callback, type = 'get' }) {
        this.path = path;
        this.callback = callback;
        this.type = type;
    }
}
exports.default = Endpoint;
