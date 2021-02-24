import { User } from "../database/entities/user";
import { UserLoginRequest } from "../contracts/requests/userLoginRequest";
import { ApolloContext } from "../types/apolloContext";
import { AuthenticationError, UserInputError } from "apollo-server-errors";
import { generateSHA512Hash } from "../utils/authorization/cryptography";
import { createToken } from "../utils/authorization/authorization";
import { UserRegistrationRequest } from "../contracts/requests/userRegistrationRequest";
import { JwtPayload } from "../types/jwtPayload";

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

    async profileOfUser(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(User).findOne({ where: { id: context.user.id } });

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },

    async checkEmailAddress(parent, args, context: ApolloContext, info) {
        // resolver input
        const email = args.emailAddress;

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(User).findOne({ where: { email: email } });

        // resolver return
        // true if email taken
        const resolverResult = dbResult ? true : false;
        return resolverResult;
    },
};

export const userMutation = {
    async login(parent, args, context: ApolloContext, info) {
        const userLoginRequest: UserLoginRequest = args.userLoginRequest;
        userLoginRequest.email = userLoginRequest.email.toLocaleLowerCase();

        console.log(userLoginRequest.email);

        const dbResult = await context.typeormManager
            .getRepository(User)
            .findOne({ where: { email: userLoginRequest.email } });
        if (!dbResult) throw new AuthenticationError("User does not exist");

        const user: User = dbResult;
        if (user.password !== generateSHA512Hash(userLoginRequest.password))
            throw new AuthenticationError("Wrong credentials");

        return createToken(user);
    },

    async register(parent, args, context: ApolloContext, info) {
        const userRegistrationRequest: UserRegistrationRequest = args.userRegistrationRequest;

        userRegistrationRequest.email = userRegistrationRequest.email.toLocaleLowerCase();
        if (userRegistrationRequest.password.length < 5)
            throw new UserInputError("Password has to be at least 8 characters long");

        if (
            await context.typeormManager
                .getRepository(User)
                .findOne({ where: { email: userRegistrationRequest.email } })
        )
            throw new UserInputError("E-Mail does already exists");

        let user: Partial<User> = {
            email: userRegistrationRequest.email,
            password: generateSHA512Hash(userRegistrationRequest.password),
            firstname: userRegistrationRequest.firstname,
            lastname: userRegistrationRequest.lastname,
        };

        const createdUser = await context.typeormManager.getRepository(User).save(user);
        return createToken(createdUser);
    },
};
