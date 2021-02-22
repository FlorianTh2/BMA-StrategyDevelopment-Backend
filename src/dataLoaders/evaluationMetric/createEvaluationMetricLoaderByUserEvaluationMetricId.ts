import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";
import { UserEvaluationMetric } from "../../database/entities/userEvaluationMetric";

export function createEvaluationMetricLoaderByUserEvaluationMetricId() {
    return new DataLoader<number, EvaluationMetric>(async (userEvaluationMetricIds) => {
        const userWithAttachedProjects = await getRepository(UserEvaluationMetric).findByIds(
            userEvaluationMetricIds as number[],
            {
                relations: ["evaluationMetric"],
            },
        );
        return userWithAttachedProjects.map((a) => a.evaluationMetric);
    });
}
