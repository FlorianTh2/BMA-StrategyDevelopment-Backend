import { ApolloContext } from "../types/apolloContext";
import { CreateUserPartialModelRequest } from "../contracts/requests/createUserPartialModelRequest";
import { UserPartialModel } from "../database/entities/userPartialModel";
import { UserEvaluationMetric } from "../database/entities/userEvaluationMetric";
import { PartialModel } from "../database/entities/partialModel";
import { CreateUserEvaluationMetricRequest } from "../contracts/requests/createUserEvaluationMetricRequest";
import { EvaluationMetric } from "../database/entities/evaluationMetric";

export const UserMaturityService = {
    async createUserPartialModels(
        context: ApolloContext,
        createUserPartialModelRequests: CreateUserPartialModelRequest[],
    ): Promise<UserPartialModel[]> {
        const createdUserPartialModels: UserPartialModel[] = await Promise.all(
            createUserPartialModelRequests.map(async (a) => {
                const createdUserPartialModel: UserPartialModel = await context.typeormManager
                    .getRepository(UserPartialModel)
                    .save({
                        maturityLevelEvaluationMetrics: a.maturityLevelEvaluationMetrics,
                        subUserPartialModels:
                            Array.isArray(a.subUserPartialModels) && a.subUserPartialModels.length
                                ? await this.createUserPartialModels(context, a.subUserPartialModels)
                                : [],
                        userEvaluationMetrics:
                            Array.isArray(a.userEvaluationMetrics) && a.userEvaluationMetrics.length
                                ? await this.saveUserEvaluationMetrics(context, a.userEvaluationMetrics)
                                : ([] as UserEvaluationMetric[]),
                        partialModel: {
                            id: parseInt(a.partialModelId),
                        } as PartialModel,
                        creator: context.user.id.toString(),
                        updater: context.user.id.toString(),
                    } as UserPartialModel);
                return createdUserPartialModel;
            }),
        );
        return createdUserPartialModels;
    },

    async saveUserEvaluationMetrics(
        context: ApolloContext,
        createUserEvaluationMetrics: CreateUserEvaluationMetricRequest[],
    ): Promise<UserEvaluationMetric[]> {
        const savedEntities: UserEvaluationMetric[] = await Promise.all(
            createUserEvaluationMetrics.map(async (a) => {
                const createdEvaluationMetric: UserEvaluationMetric = await context.typeormManager
                    .getRepository(UserEvaluationMetric)
                    .save({
                        valueEvaluationMetric: a.valueEvaluationMetric,
                        evaluationMetric: {
                            id: parseInt(a.evaluationMetricId),
                        } as EvaluationMetric,
                        creator: context.user.id.toString(),
                        updater: context.user.id.toString(),
                    } as UserEvaluationMetric);
                return createdEvaluationMetric;
            }),
        );
        return savedEntities;
    },
};
