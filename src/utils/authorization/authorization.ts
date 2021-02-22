import { AuthenticationError } from "apollo-server";
import * as jwt from "jsonwebtoken";
import { JwtPayload } from "../../types/jwtPayload";

export const verifyToken = (authorization: string | undefined) => {
    if (authorization) {
        const token = authorization.replace("Bearer ", "");
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET as string) as Partial<JwtPayload>;
            return payload.userId;
        } catch (err) {
            throw new AuthenticationError("Failed to verify token");
        }
    }
    return undefined;
};

export const createToken = (userId: string) => {
    const payload: JwtPayload = { userId: userId };
    const jwtOptions: jwt.SignOptions = { expiresIn: process.env.JWT_EXPIRES_IN };
    return jwt.sign(payload, process.env.JWT_SECRET as string);
};
