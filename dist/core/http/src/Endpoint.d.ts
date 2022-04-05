import type { Endpoint as IEndpoint, EndpointPayload } from '../types/Server';
interface Endpoint extends IEndpoint {
}
declare class Endpoint {
    constructor({ path, callback, type }: EndpointPayload);
}
export default Endpoint;
//# sourceMappingURL=Endpoint.d.ts.map