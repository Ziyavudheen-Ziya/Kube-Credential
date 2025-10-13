import mongoose, { Document } from "mongoose";
export interface userCredential extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
    isssuedBy: string;
    timeStamp: Date;
}
export declare const credentialUser: mongoose.Model<userCredential, {}, {}, {}, mongoose.Document<unknown, {}, userCredential, {}, {}> & userCredential & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=userModel.d.ts.map