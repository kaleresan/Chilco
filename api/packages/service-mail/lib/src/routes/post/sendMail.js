"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const middlewares_1 = require("@chilco/middlewares");
const common_service_1 = require("@chilco/common-service");
const config_1 = __importDefault(require("./../../config"));
const mailRouter = express_1.Router();
exports.sendMailRouter = mailRouter;
function createMailData(req, res, next) {
    const body = req.body;
    const defaults = {
        from: '"Chilco\'s Bot" <example@example.com>',
        text: 'No plain text available, please view the HTML instead.',
    };
    const mailData = {
        from: body.from || defaults.from,
        to: body.to,
        subject: body.subject,
        text: body.text || defaults.text,
        html: body.html,
    };
    req.mailData = mailData;
    next();
}
exports.createMailData = createMailData;
function sendMailController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { transport } = config_1.default;
            const { mailData } = req;
            yield transport.sendMail(mailData);
            common_service_1.createSuccessResponse(res, 200);
        }
        catch (err) {
            console.log(err);
            common_service_1.createErrorResponse(res, 400);
        }
    });
}
exports.sendMailController = sendMailController;
mailRouter.post('/send', [
    express_validator_1.body('from')
        .isString()
        .optional(),
    express_validator_1.body('to').isString(),
    express_validator_1.body('subject').isString(),
    express_validator_1.body('text')
        .isString()
        .optional(),
    express_validator_1.body('html').isString(),
], middlewares_1.checkValidation, createMailData, sendMailController);
//# sourceMappingURL=sendMail.js.map