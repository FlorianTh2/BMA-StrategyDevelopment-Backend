import { ApolloContext } from "../types/apolloContext";
import { UserMaturityModel } from "../database/entities/userMaturityModel";
import { AuthenticationError, UserInputError } from "apollo-server-errors";
import { CreateUserMaturityModelRequest } from "../contracts/requests/createUserMaturityModelRequest";
import { MaturityModel } from "../database/entities/maturityModel";
import { loadFullMaturityModel } from "../utils/maturityModel/loadFullMaturityModel";
import { CreateUserPartialModelRequest } from "../contracts/requests/createUserPartialModelRequest";
import { PartialModel } from "../database/entities/partialModel";
import { UserMaturityService } from "../services/userMaturityService";
import { ConsistencyMatrix } from "../database/entities/consistencyMatrix";
import { CreateConsistencyMatrixRequest } from "../contracts/requests/createConsistencyMatrixRequest";
import { Project } from "../database/entities/project";

export const consistencyMatrixQuery = {
    async consistencyMatrixOfUser(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(ConsistencyMatrix)
            .findOne({ where: { id: id, creator: context.user.id } });
        if (!dbResult)
            throw new AuthenticationError(
                "ConsistencyMatrix was not found. Check if this userMaturityModel was created by you!",
            );

        // resolver return
        const resolverResult = {
            ...dbResult,
            fileData: dbResult.fileData.toString("base64"),
        };
        return resolverResult;
    },
    async consistencyMatricesOfUser(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(ConsistencyMatrix)
            .find({ where: { creator: context.user.id } });

        // resolver return
        const resolverResult = dbResult.map((a) => {
            return {
                ...a,
                fileData: a.fileData.toString("base64"),
            };
        });

        return resolverResult;
    },
};

export const consistencyMatrixMutation = {
    async createConsistencyMatrix(parent, args, context: ApolloContext, info) {
        console.log("got consistencyMatrix");
        // resolver input
        const createConsistencyMatrix: CreateConsistencyMatrixRequest = args.consistencyMatrix;

        // resolver business logic
        // steps:
        //  check if model ist vollständig, check if user is logged in / exists, check if project belongs to user
        const dbResult = await context.typeormManager
            .getRepository(Project)
            .findOne({ where: { id: createConsistencyMatrix.projectId, creator: context.user.id } });

        if (!dbResult)
            throw new AuthenticationError("Project was not found. Check if this project was created by you!");

        // create userMaturityModel
        const createdConsistency: ConsistencyMatrix = await context.typeormManager
            .getRepository(ConsistencyMatrix)
            .save({
                name: createConsistencyMatrix.name,
                filename: createConsistencyMatrix.filename,
                description: createConsistencyMatrix.description,
                fileData: Buffer.from(createConsistencyMatrix.consistencyMatrixBlobBase64String, "base64"),
                project: {
                    id: parseInt(createConsistencyMatrix.projectId),
                },
                creator: context.user.id.toString(),
                updater: context.user.id.toString(),
            } as ConsistencyMatrix);
        // resolver return
        return createdConsistency;
    },
};
