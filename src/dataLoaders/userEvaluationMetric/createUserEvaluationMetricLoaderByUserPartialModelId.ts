import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserEvaluationMetric } from "../../database/entities/userEvaluationMetric";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { PartialModel } from "../../database/entities/partialModel";

export function createUserEvaluationMetricLoaderByUserPartialModelId() {
    return new DataLoader<number, UserEvaluationMetric[]>(async (userPartialModelIds) => {
        const userEvaluationMetricsWithAttached = await getRepository(UserPartialModel).findByIds(
            userPartialModelIds as number[],
            {
                relations: ["userEvaluationMetrics"],
            },
        );

        const userPartialModelIdToUserEvaluationMetric: Record<number, UserEvaluationMetric[]> = {};
        userEvaluationMetricsWithAttached.forEach((a) => {
            userPartialModelIdToUserEvaluationMetric[a.id] = a.userEvaluationMetrics;
        });
        return userPartialModelIds.map((a) => userPartialModelIdToUserEvaluationMetric[a]);
    });
}
