import type { Application, RequestHandler } from 'express';
declare type serverPayload = {
    PORT: number;
    autoHandle: boolean;
    methods: Endpoint[];
};
declare type RESTTypes = 'get' | 'post' | 'delete' | 'put';
interface Endpoint {
    path: string;
    callback: RequestHandler;
    type: RESTTypes;
}
interface Server {
    server: Application;
    autoHandle: boolean;
    PORT: number;
    methods: Endpoint[];
}
declare type EndpointPayload = Endpoint;
export type { Server, serverPayload, RESTTypes, Endpoint, EndpointPayload };
//# sourceMappingURL=Server.d.ts.map