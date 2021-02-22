import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { PartialModel } from "../../database/entities/partialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";

export function createEvaluationMetricLoaderByPartialModelId() {
    return new DataLoader<number, EvaluationMetric[]>(async (partialModelIds) => {
        const userWithAttachedProjects = await getRepository(PartialModel).findByIds(partialModelIds as number[], {
            relations: ["evaluationMetrics"],
        });
        return userWithAttachedProjects.map((a) => a.evaluationMetrics);
    });
}
