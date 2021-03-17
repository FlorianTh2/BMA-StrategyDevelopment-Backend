import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";
import { UserEvaluationMetric } from "../../database/entities/userEvaluationMetric";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export function createEvaluationMetricLoaderByUserEvaluationMetricId() {
    return new DataLoader<number, EvaluationMetric>(async (userEvaluationMetricIds) => {
        const userWithAttachedProjects = await getRepository(UserEvaluationMetric).findByIds(
            userEvaluationMetricIds as number[],
            {
                relations: ["evaluationMetric"],
            },
        );
        const userEvaluationMetricIdToEvaluationMetric: Record<number, EvaluationMetric> = {};
        userWithAttachedProjects.forEach((a) => {
            userEvaluationMetricIdToEvaluationMetric[a.id] = a.evaluationMetric;
        });
        return userEvaluationMetricIds.map((a) => userEvaluationMetricIdToEvaluationMetric[a]);
    });
}
