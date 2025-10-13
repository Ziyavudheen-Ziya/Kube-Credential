"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnect = async () => {
    try {
        await mongoose_1.default.connect("mongodb+srv://ziyavudheen:ziyavudheen@cluster0.zkekwwj.mongodb.net/kubeCredentils");
        console.log("MongoDb is connected successfully");
    }
    catch (error) {
        console.log("Error connection to mongoDB", error);
        process.exit(1);
    }
};
exports.default = dbConnect;
//# sourceMappingURL=db.js.map