import { User } from "../entities/user";

export const userQuery = {
    async user(parent, args, context, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(User).findOne({ where: { id: id } });

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
    async users(parent, args, context, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(User).find();

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};

export const userMutation = {
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
    //         const project = await userDatasource.createUser({ name, email }, password);
    //         const payload: JwtPayload = { id: project.id };
    //
    //         return jwt.sign(payload, process.env.JWT_SECRET, {
    //             expiresIn: process.env.JWT_EXPIRES_IN,
    //         });
    //     },
    // // login(email: String!, password: String!): String
    //     async login(_, args: SigninDto, ctx) {
    //         const { email, password } = args;
    //         const userDatasource: UserDatasource = ctx.dataSources.userDatasource;
    //         const project = await userDatasource.getUserByEmail(email);
    //
    //         if (!project) {
    //             throw new AuthenticationError("Wrong credentials");
    //         }
    //
    //         const hash = await bcrypt.hash(password, project.passwordSalt);
    //
    //         if (hash === project.passwordHash) {
    //             const payload: JwtPayload = { id: project.id };
    //
    //             return jwt.sign(payload, process.env.JWT_SECRET, {
    //                 expiresIn: process.env.JWT_EXPIRES_IN,
    //             });
    //         } else {
    //             throw new AuthenticationError("Wrong credentials");
    //         }
    //     }
};
