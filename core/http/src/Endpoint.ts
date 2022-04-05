import type { Endpoint as IEndpoint, EndpointPayload } from '../types/Server';

interface Endpoint extends IEndpoint { };

class Endpoint {
    constructor({ path, callback, type = 'get' }: EndpointPayload) {
        this.path = path;
        this.callback = callback;
        this.type = type;
    }
}


export default Endpoint;