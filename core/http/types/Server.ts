import type { Application, RequestHandler } from 'express';

type serverPayload = {
    PORT: number;
    autoHandle: boolean;
    path: { absolute: string, relative: string };
}

type RESTTypes = 'get'|'post'|'delete'|'put';

interface Endpoint {
    path: string;
    callback: RequestHandler;
}

interface Server {
    server: Application;
    autoHandle: boolean;
    PORT: number;
    path: { absolute: string, relative: string };
    methods: Map<RESTTypes, Endpoint[]>
}

type EndpointPayload = Endpoint;

export type { Server, serverPayload, RESTTypes, Endpoint, EndpointPayload };