import { Response } from 'express';
declare const mailRouter: import("express-serve-static-core").Router;
export declare function createMailData(req: any, res: any, next: any): void;
export declare function sendMailController(req: any, res: Response): Promise<void>;
export { mailRouter as sendMailRouter };
