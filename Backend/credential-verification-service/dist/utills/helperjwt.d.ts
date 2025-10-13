import jwt from "jsonwebtoken";
export declare const generateToken: (email: string) => string;
export declare const verifyToken: (token: string) => string | jwt.JwtPayload | null;
//# sourceMappingURL=helperjwt.d.ts.map