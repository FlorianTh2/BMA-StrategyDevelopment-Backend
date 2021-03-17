import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { PartialModel } from "../../database/entities/partialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export function createEvaluationMetricLoaderByPartialModelId() {
    return new DataLoader<number, EvaluationMetric[]>(async (partialModelIds) => {
        const userWithAttachedProjects = await getRepository(PartialModel).findByIds(partialModelIds as number[], {
            relations: ["evaluationMetrics"],
        });
        const partialModelIdToEvaluationMetrics: Record<number, EvaluationMetric[]> = {};
        userWithAttachedProjects.forEach((a) => {
            partialModelIdToEvaluationMetrics[a.id] = a.evaluationMetrics;
        });
        return partialModelIds.map((a) => partialModelIdToEvaluationMetrics[a]);
    });
}
