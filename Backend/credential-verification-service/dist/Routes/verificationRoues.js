"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verificationRoute = (0, express_1.default)();
const userVerification_1 = require("../Controller/userVerification");
verificationRoute.post('/login', userVerification_1.loginVerification);
exports.default = verificationRoute;
//# sourceMappingURL=verificationRoues.js.map