import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { MaturityModel } from "../../database/entities/maturityModel";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export function createMaturityModelLoaderByProjectId() {
    return new DataLoader<number, MaturityModel[]>(async (projectIds) => {
        const userPartialModelsWithAttachedMaturityModel = await getRepository(Project).findByIds(
            projectIds as number[],
            {
                relations: ["maturityModels"],
            },
        );
        return userPartialModelsWithAttachedMaturityModel.map((a) => a.maturityModels);
    });
}
