import type { Application } from 'express';
import type { serverPayload, Server as IServer } from '../types/Server';
interface Server extends IServer {
}
declare class Server {
    constructor(server: Application, { PORT, methods, autoHandle }: serverPayload);
    handleRequests(): boolean;
    listenToPort(): void;
}
export default Server;
//# sourceMappingURL=Server.d.ts.map