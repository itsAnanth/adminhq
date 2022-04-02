import type { Application, RequestHandler } from 'express';

type serverPayload = {
    PORT: number;
    autoHandle: boolean;
    methods: Endpoint[];
}

type RESTTypes = 'get'|'post'|'delete'|'put';

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

type EndpointPayload = Endpoint;

export type { Server, serverPayload, RESTTypes, Endpoint, EndpointPayload };