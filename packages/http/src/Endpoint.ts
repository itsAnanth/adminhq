import type { Endpoint as IEndpoint, EndpointPayload } from '../types/Server';

interface Endpoint extends IEndpoint { };

class Endpoint {
    constructor({ path, callback }: EndpointPayload) {
        this.path = path;
        this.callback = callback;
    }
}

export default Endpoint;