"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const userRoutes = (0, express_1.default)();
userRoutes.post("/signup", userController_1.Signup);
exports.default = userRoutes;
//# sourceMappingURL=routeUser.js.map