import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";

export function createProjectLoaderByUserMaturityModelId() {
    return new DataLoader<number, Project[]>(async (maturityModelIds) => {
        const maturityModelsWithAttechedProjects = await getRepository(UserMaturityModel).findByIds(
            maturityModelIds as number[],
            {
                relations: ["projects"],
            },
        );
        return maturityModelsWithAttechedProjects.map((a) => a.projects);
    });
}
