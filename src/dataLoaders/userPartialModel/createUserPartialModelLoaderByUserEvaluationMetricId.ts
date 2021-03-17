import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { UserEvaluationMetric } from "../../database/entities/userEvaluationMetric";

export function createUserPartialModelLoaderByUserEvaluationMetricId() {
    return new DataLoader<number, UserPartialModel>(async (userEvaluationMetricIds) => {
        const maturityModelsWithAttachedUserPartialModels = await getRepository(UserEvaluationMetric).findByIds(
            userEvaluationMetricIds as number[],
            {
                relations: ["userPartialModel"],
            },
        );
        const userEvaluationMetricIdToUserPartialModel: Record<number, UserPartialModel> = {};
        maturityModelsWithAttachedUserPartialModels.forEach((a) => {
            userEvaluationMetricIdToUserPartialModel[a.id] = a.userPartialModel;
        });
        return userEvaluationMetricIds.map((a) => userEvaluationMetricIdToUserPartialModel[a]);
    });
}
