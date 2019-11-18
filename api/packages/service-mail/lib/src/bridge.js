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
const common_service_1 = require("@chilco/common-service");
const config_1 = __importDefault(require("./config"));
class MailServiceBridge {
    constructor(serviceConfig) {
        this.serviceConfig = serviceConfig;
        this.service = common_service_1.createServiceCommunicator(config_1.default, serviceConfig);
    }
    sendMail(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return common_service_1.getServiceResponseData(yield this.service.post('/send', body));
        });
    }
    sendPasswordResetMail(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return common_service_1.getServiceResponseData(yield this.service.post('/passwordReset', body));
        });
    }
    sendConfirmationMail(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return common_service_1.getServiceResponseData(yield this.service.post('/confirmation', body));
        });
    }
}
exports.MailServiceBridge = MailServiceBridge;
//# sourceMappingURL=bridge.js.map