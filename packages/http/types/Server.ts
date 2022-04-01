import type { Application, RequestHandler } from 'express';

type serverPayload = {
    PORT: number;
    autoHandle: boolean;
    methodsPath: string;
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
    methodsPath: string;
    methods: Map<RESTTypes, Endpoint[]>
}

type EndpointPayload = Endpoint;

export type { Server, serverPayload, RESTTypes, Endpoint, EndpointPayload };