import fs from 'fs';
import type { Application } from 'express';
import type { serverPayload, Server as IServer, RESTTypes, Endpoint } from '../types/Server';

interface Server extends IServer { };

class Server {
    constructor(server: Application, {
        PORT, methodsPath, autoHandle
    }: serverPayload) {
        this.methodsPath = methodsPath;
        this.server = server;
        this.methods = new Map();
        this.PORT = PORT || 3000;
        this.autoHandle = autoHandle || true;
        this.init().then(() => this.handleRequests() && (this.autoHandle && this.listenToPort()));
    }

    async init() {
        const methodsPath: RESTTypes[] = (fs.readdirSync(this.methodsPath).map(x => x.toLowerCase()).filter(x => ['get', 'post', 'delete', 'update'].includes(x)) as RESTTypes[]);
        for (let i = 0; i < methodsPath.length; i++) {
            const method: RESTTypes = methodsPath[i];
            const routesPath = fs.readdirSync(`./methods/${method}`);
            for (let j = 0; j < routesPath.length; j++) {
                const route: Endpoint = (await import(`../methods/${method}/${routesPath[j]}`)).default;
                !this.methods.has(method) && (this.methods.set(method, []));
                (this.methods.get(method).push(route));
            }
        }
    }

    handleRequests() {
        for (const [key, value] of [...this.methods.entries()]) {
            for (let route = 0; route < value.length; route++) {
                const { path, callback } = value[route];
                const ckey = (key.toLowerCase() as RESTTypes);
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


export default Server;