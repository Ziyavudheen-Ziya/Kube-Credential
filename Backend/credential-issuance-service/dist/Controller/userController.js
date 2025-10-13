"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
const userModel_1 = require("../models/userModel");
const helperjwt_1 = require("../utills/helperjwt");
const hashPasswordHelper_1 = require("../utills/hashPasswordHelper");
const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }
        console.log(name);
        const idNumber = Math.floor(1000 + Math.random() * 9000);
        console.log(idNumber);
        const workerId = process.env.Worker_id;
        const checkEmailExssit = await userModel_1.credentialUser.findOne({ email });
        if (checkEmailExssit) {
            console.log("Data checked correctly");
            return res.status(400).json({ message: "User Already Exists" });
        }
        const hashPass = await (0, hashPasswordHelper_1.hashPassword)(password);
        console.log(hashPass);
        const user = await userModel_1.credentialUser.create({
            id: idNumber,
            name: name,
            email: email,
            password: hashPass,
            isssuedBy: workerId,
        });
        const token = (0, helperjwt_1.generateToken)(email);
        res.status(201).json({
            message: "User Signed Successfully",
            user: { id: user.id, name: user.name, email: user.email },
            token,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.Signup = Signup;
//# sourceMappingURL=userController.js.map