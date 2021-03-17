import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { PartialModel } from "../../database/entities/partialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";

export function createPartialModelLoaderByEvaluationMetricId() {
    return new DataLoader<number, PartialModel>(async (evaluationMetricIds) => {
        const userWithAttachedProjects = await getRepository(EvaluationMetric).findByIds(
            evaluationMetricIds as number[],
            {
                relations: ["partialModel"],
            },
        );
        const evaluationMetricIdToPartialModel: Record<number, PartialModel> = {};
        userWithAttachedProjects.forEach((a) => {
            evaluationMetricIdToPartialModel[a.id] = a.partialModel;
        });
        return evaluationMetricIds.map((a) => evaluationMetricIdToPartialModel[a]);
    });
}
