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
exports.sendConfirmationRouter = mailRouter;
const confirmationFile = path.resolve(__dirname, '..', '..', 'static', 'confirmation.html');
const confirmationHTML = fs.readFileSync(confirmationFile, {
    encoding: 'utf-8',
});
const emailDefaults = {
    subject: 'Confirm your Chilco account!',
};
function createConfirmationHtml(req, res, next) {
    const { firstname, confirmUrl, subject } = req.body;
    const replaceValues = {
        firstname,
        url: confirmUrl,
        title: subject || emailDefaults.subject,
    };
    req.body.subject = subject || emailDefaults.subject;
    req.body.html = helper_1.replacePlaceholders(replaceValues, confirmationHTML);
    next();
}
mailRouter.post('/confirmation', [
    express_validator_1.body('to').isString(),
    express_validator_1.body('from')
        .isString()
        .optional(),
    express_validator_1.body('subject')
        .isString()
        .optional(),
    express_validator_1.body('firstname').isString(),
    express_validator_1.body('confirmUrl').isString(),
], middlewares_1.checkValidation, createConfirmationHtml, sendMail_1.createMailData, sendMail_1.sendMailController);
//# sourceMappingURL=sendConfirmation.js.map