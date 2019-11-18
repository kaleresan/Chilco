"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("./post");
const routes = express_1.Router();
exports.routes = routes;
routes.use(post_1.sendMailRouter);
routes.use(post_1.sendConfirmationRouter);
routes.use(post_1.sendPasswordResetRouter);
//# sourceMappingURL=index.js.map