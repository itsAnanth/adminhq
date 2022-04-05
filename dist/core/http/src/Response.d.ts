import statusCodes from "./statusCodes";
declare abstract class IResponse {
    static status: typeof statusCodes;
}
declare class Response extends IResponse {
    static error({ message, code }: {
        message: string;
        code?: number;
    }): string;
    static success({ message, code }: {
        message: string;
        code?: number;
    }): string;
}
export default Response;
//# sourceMappingURL=Response.d.ts.map