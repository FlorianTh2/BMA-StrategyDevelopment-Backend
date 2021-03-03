import { Project } from "../database/entities/project";
import { ApolloContext } from "../types/apolloContext";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../database/entities/userPartialModel";
import { UserMaturityModel } from "../database/entities/userMaturityModel";
import { AuthenticationError } from "apollo-server-errors";
import { CreateUserMaturityModelRequest } from "../contracts/requests/createUserMaturityModelRequest";
import { MaturityModel } from "../database/entities/maturityModel";
import { loadFullMaturityModel } from "../utils/maturityModel/loadFullMaturityModel";
import { CreateUserPartialModelRequest } from "../contracts/requests/createUserPartialModelRequest";
import { PartialModel } from "../database/entities/partialModel";

export const userMaturityModelQuery = {
    async userMaturityModel(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(UserMaturityModel).findOne({ where: { id: id } });

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
    async userMaturityModels(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(UserMaturityModel).find();

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
    async userMaturityModelOfUser(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(UserMaturityModel)
            .findOne({ where: { id: id, creator: context.user.id } });
        if (!dbResult)
            throw new AuthenticationError(
                "UserMaturityModel was not found. Check if this userMaturityModel was created by you!",
            );

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
    async userMaturityModelsOfUser(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(UserMaturityModel)
            .find({ where: { creator: context.user.id } });

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};

export const userMaturityModelMutation = {
    async createUserMaturityModel(parent, args, context: ApolloContext, info) {
        // resolver input
        const createUserMaturityModel: CreateUserMaturityModelRequest = args.userMaturityModel;

        // resolver business logic
        // steps:
        //  check if model ist vollständig, check if user is logged in / exists, check if project belongs to user
        const dbResult = await context.typeormManager
            .getRepository(UserMaturityModel)
            .findOne({ where: { id: createUserMaturityModel.projectId, creator: context.user.id } });
        if (!dbResult)
            throw new AuthenticationError("Project was not found. Check if this project was created by you!");

        const maturityModel: MaturityModel = await loadFullMaturityModel(context);

        const userMaturityModelComplete: boolean = await checkCreateUserMaturityModelComplete2(
            maturityModel.partialModels,
            createUserMaturityModel.userPartialModels,
        );
        // create userMaturityModel

        // resolver return
        return false;
    },
};

function checkCreateUserMaturityModelComplete2(
    partialModels: PartialModel[],
    userPartialModels: CreateUserPartialModelRequest[],
): boolean {
    const checkList: boolean[] = partialModels.map((partialModel) => {
        const userPartialModel: CreateUserPartialModelRequest = userPartialModels.filter(
            (b) => b.partialModelId === partialModel.id.toString(),
        )[0];
        if (!userPartialModel) return false;
        if (!userPartialModel.maturityLevelEvaluationMetrics) return false;
        // now check all needed things
        const userPartialModelUserEvaluationMetricEvaluationMetricIds = userPartialModel.userEvaluationMetrics?.map(
            (b) => b.evaluationMetricId,
        );
        const ifMetricExistItHasValue: boolean = userPartialModel.userEvaluationMetrics
            ?.map((f) => (f.valueEvaluationMetric ? true : false))
            .reduce((g, h) => g == true && h == true);
        if (!ifMetricExistItHasValue) return false;
        const partialModelEvaluationMetricIds = partialModel.evaluationMetrics.map((c) => c.id);
        if (
            !(
                userPartialModelUserEvaluationMetricEvaluationMetricIds.sort().join(",") ===
                partialModelEvaluationMetricIds.sort().join(",")
            )
        ) {
            return false;
        }
        if (Array.isArray(partialModel.subPartialModels) && partialModel.subPartialModels.length)
            return checkCreateUserMaturityModelComplete2(
                partialModel.subPartialModels,
                userPartialModel.subUserPartialModels,
            );
        return true;
    });
    return checkList.reduce((d, e) => d === true && e === true);
}

function createUserMaturityModel(
    context: ApolloContext,
    createUserPartialModelRequests: CreateUserPartialModelRequest[],
) {
    createUserPartialModelRequests.map((a) => {
        context.typeormManager.getRepository(UserPartialModel).save({
            // todo
        } as UserPartialModel);
    });
}
