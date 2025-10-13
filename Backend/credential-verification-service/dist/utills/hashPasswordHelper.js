"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_ROUNDS = 10;
async function hashPassword(plain) {
    const hashed = await bcrypt_1.default.hash(plain, SALT_ROUNDS);
    return hashed;
}
async function verifyPassword(plain, hased) {
    return await bcrypt_1.default.compare(plain, hased);
}
//# sourceMappingURL=hashPasswordHelper.js.map