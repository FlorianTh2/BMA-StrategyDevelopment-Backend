import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { MaturityModel } from "../../database/entities/maturityModel";

export function createProjectLoaderByMaturityModelId() {
    return new DataLoader<number, Project[]>(async (maturityModelIds) => {
        const maturityModelsWithAttechedProjects = await getRepository(MaturityModel).findByIds(
            maturityModelIds as number[],
            {
                relations: ["projects"],
            },
        );
        return maturityModelsWithAttechedProjects.map((a) => a.projects);
    });
}
