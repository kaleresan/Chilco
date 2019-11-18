"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const middlewares_1 = require("@chilco/middlewares");
const helper_1 = require("../helper");
const sendMail_1 = require("./sendMail");
const mailRouter = express_1.Router();
exports.sendPasswordResetRouter = mailRouter;
const passwordFile = path.resolve(__dirname, '..', '..', 'static', 'passwordReset.html');
const passwordResetHTML = fs.readFileSync(passwordFile, {
    encoding: 'utf-8',
});
const emailDefaults = {
    subject: 'Reset your password for your Chilco account!',
};
function createPasswordResetHtml(req, res, next) {
    const { name, resetURL, subject } = req.body;
    const replaceValues = {
        name,
        url: resetURL,
        title: subject || emailDefaults.subject,
    };
    req.body.subject = subject || emailDefaults.subject;
    req.body.html = helper_1.replacePlaceholders(replaceValues, passwordResetHTML);
    next();
}
mailRouter.post('/passwordReset', [
    express_validator_1.body('to').isString(),
    express_validator_1.body('name').isString(),
    express_validator_1.body('resetURL').isString(),
    express_validator_1.body('from')
        .isString()
        .optional(),
    express_validator_1.body('subject')
        .isString()
        .optional(),
], middlewares_1.checkValidation, createPasswordResetHtml, sendMail_1.createMailData, sendMail_1.sendMailController);
//# sourceMappingURL=sendPasswordReset.js.map