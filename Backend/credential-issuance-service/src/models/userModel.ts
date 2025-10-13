import mongoose, { Schema, Document } from "mongoose";

export interface userCredential extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  isssuedBy: string;
  timeStamp: Date;
}

const userCredentialSchema = new Schema<userCredential>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password:{type:String,required:true},
    isssuedBy: { type: String,},
  },
  { timestamps: true }
);

export const credentialUser = mongoose.model<userCredential>(
  "userCredential",
  userCredentialSchema
);
