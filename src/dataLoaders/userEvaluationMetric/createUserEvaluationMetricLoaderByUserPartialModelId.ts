import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserEvaluationMetric } from "../../database/entities/userEvaluationMetric";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export function createUserEvaluationMetricLoaderByUserPartialModelId() {
    return new DataLoader<number, UserEvaluationMetric[]>(async (userPartialModelIds) => {
        const userEvaluationMetricsWithAttached = await getRepository(UserPartialModel).findByIds(
            userPartialModelIds as number[],
            {
                relations: ["userEvaluationMetrics"],
            },
        );
        return userEvaluationMetricsWithAttached.map((a) => a.userEvaluationMetrics);
    });
}
