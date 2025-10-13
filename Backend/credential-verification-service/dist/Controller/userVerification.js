"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginVerification = void 0;
const userModel_1 = require("../models/userModel");
const helperjwt_1 = require("../utills/helperjwt");
const hashPasswordHelper_1 = require("../utills/hashPasswordHelper");
const loginVerification = async (req, res) => {
    try {
        const { email, password } = req.body;
        const exsistingUser = await userModel_1.credentialUser.findOne({
            email: email,
        });
        if (!exsistingUser) {
            return res.status(400).json({ message: "Invalid-Email" });
        }
        const verifyPass = await (0, hashPasswordHelper_1.verifyPassword)(password, exsistingUser.password);
        if (!verifyPass) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = (0, helperjwt_1.generateToken)(email);
        console.log("Data checked returntrue", verifyPass);
        return res.status(200).json({
            message: "Login Successfull",
            token,
            user: { name: exsistingUser.name, email: exsistingUser.email },
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.loginVerification = loginVerification;
//# sourceMappingURL=userVerification.js.map