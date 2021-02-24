import { AuthenticationError } from "apollo-server";
import * as jwt from "jsonwebtoken";
import { JwtPayload } from "../../types/jwtPayload";
import { User } from "../../database/entities/user";

export const verifyToken = (authorization: string | undefined) => {
    if (authorization) {
        const token = authorization.replace("Bearer ", "");
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET as string) as Partial<JwtPayload>;
            return payload.user?.id;
        } catch (err) {}
    }
    return undefined;
};

export const createToken = (user: User) => {
    const payload: JwtPayload = {
        user: {
            id: user.id.toString(),
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
        },
    };
    const jwtOptions: jwt.SignOptions = { expiresIn: process.env.JWT_EXPIRES_IN };
    return jwt.sign(payload, process.env.JWT_SECRET as string);
};
