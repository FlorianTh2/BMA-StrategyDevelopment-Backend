import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export function createProjectLoaderByUserMaturityModelId() {
    return new DataLoader<number, Project[]>(async (maturityModelIds) => {
        const maturityModelsWithAttechedProjects = await getRepository(UserMaturityModel).findByIds(
            maturityModelIds as number[],
            {
                relations: ["projects"],
            },
        );
        const maturityModelIdToProjects: Record<number, Project[]> = {};
        maturityModelsWithAttechedProjects.forEach((a) => {
            maturityModelIdToProjects[a.id] = a.projects;
        });
        return maturityModelIds.map((a) => maturityModelIdToProjects[a]);
    });
}
