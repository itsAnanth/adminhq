"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Endpoint {
    constructor({ path, callback }) {
        this.path = path;
        this.callback = callback;
    }
}
exports.default = Endpoint;
