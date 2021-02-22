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
        return userWithAttachedProjects.map((a) => a.partialModel);
    });
}
