import { User } from "../entities/user";

export function userQuery() {
    return {
        user(parent, args, context, info) {
            // context.user.id;
            return { id: 1, name: "testName" } as User;
        },
        users(parent, args, context, info) {
            // context.user.id;
            return [{ id: 1, name: "testName" }] as [User];
        },
    };
}

export function userMutation() {
    //     // signup(name: String!, email: String!, password: String!): String
    //     async signup(_, args: SignupDto, ctx) {
    //         const { name, email, password } = args;
    //         const userDatasource: UserDatasource = ctx.dataSources.userDatasource;
    //         const existentUser = await userDatasource.getUserByEmail(email);
    //
    //         if (password.length < 8) {
    //             throw new UserInputError("Password must at least 8 characters long");
    //         }
    //
    //         if (existentUser) {
    //             throw new UserInputError("E-Mail does already exists");
    //         }
    //
    //         const user = await userDatasource.createUser({ name, email }, password);
    //         const payload: JwtPayload = { id: user.id };
    //
    //         return jwt.sign(payload, process.env.JWT_SECRET, {
    //             expiresIn: process.env.JWT_EXPIRES_IN,
    //         });
    //     },
    // // login(email: String!, password: String!): String
    //     async login(_, args: SigninDto, ctx) {
    //         const { email, password } = args;
    //         const userDatasource: UserDatasource = ctx.dataSources.userDatasource;
    //         const user = await userDatasource.getUserByEmail(email);
    //
    //         if (!user) {
    //             throw new AuthenticationError("Wrong credentials");
    //         }
    //
    //         const hash = await bcrypt.hash(password, user.passwordSalt);
    //
    //         if (hash === user.passwordHash) {
    //             const payload: JwtPayload = { id: user.id };
    //
    //             return jwt.sign(payload, process.env.JWT_SECRET, {
    //                 expiresIn: process.env.JWT_EXPIRES_IN,
    //             });
    //         } else {
    //             throw new AuthenticationError("Wrong credentials");
    //         }
    //     }
}
