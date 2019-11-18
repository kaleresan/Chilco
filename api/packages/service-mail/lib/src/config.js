"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
const routes_1 = require("./routes");
const common_service_1 = require("@chilco/common-service");
exports.mailTransport = nodemailer.createTransport({
    port: 465,
    host: 'smtp.example.com',
    secure: true,
    debug: true,
    auth: {
        user: 'username',
        pass: 'password',
    },
});
exports.config = common_service_1.createServiceConfig({
    routes: routes_1.routes,
    port: 8000,
    transport: exports.mailTransport,
    serviceName: 'service-mail',
});
exports.default = exports.config;
//# sourceMappingURL=config.js.map