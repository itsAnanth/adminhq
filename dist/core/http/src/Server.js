"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Server {
    constructor(server, { PORT, methods, autoHandle }) {
        this.server = server;
        this.methods = methods;
        this.PORT = PORT || 3000;
        this.autoHandle = autoHandle || true;
        this.handleRequests() && (this.autoHandle && this.listenToPort());
    }
    // async init() {
    //     const methodsPath: RESTTypes[] = (fs.readdirSync(this.path.absolute).filter(x => ['get', 'post', 'delete', 'update'].includes(x.toLowerCase())) as RESTTypes[]);
    //     if (methodsPath.length === 0)
    //         return Logger.log('[server]', `${this.path.absolute} is empty. skipping route register`);
    //     for (let i = 0; i < methodsPath.length; i++) {
    //         let method: RESTTypes = methodsPath[i];
    //         let routesPath = fs.readdirSync(`./methods/${method}`);
    //         for (let j = 0; j < routesPath.length; j++) {
    //             let _filename = routesPath[j].slice(0, routesPath[j].lastIndexOf('.'));
    //             const _path = `${this.path.relative}/${method}/${_filename}`;
    //             const route: IEndpoint = (await import(`${_path}`)).default;
    //             if (!(route instanceof Endpoint)) {
    //                 Logger.log('[server]', `at ${_path} expected type Enpoint got ${typeof route}`);
    //                 continue;
    //             }
    //             method = method.toLocaleLowerCase() as RESTTypes;
    //             !this.methods.has(method) && (this.methods.set(method, []));
    //             (this.methods.get(method).push(route));
    //             Logger.log('[server]', `Registered [${method}]`, `${route}`)
    //         }
    //     }
    // }
    handleRequests() {
        for (const endpoint of this.methods) {
            const { path, callback, type } = endpoint;
            const ckey = type.toLowerCase();
            // @ts-ignore
            this.server[`${ckey}`].apply(this.server, [path, callback]);
        }
        return true;
    }
    listenToPort() {
        this.server.listen(this.PORT, () => console.log(`[server] server running on port ${this.PORT}`));
    }
}
exports.default = Server;
