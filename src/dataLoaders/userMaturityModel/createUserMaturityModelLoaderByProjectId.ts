import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export function createUserMaturityModelLoaderByProjectId() {
    return new DataLoader<number, UserMaturityModel[]>(async (projectIds) => {
        const userPartialModelsWithAttachedMaturityModel = await getRepository(Project).findByIds(
            projectIds as number[],
            {
                relations: ["userMaturityModels"],
            },
        );
        const projectIdToUserMaturityModels: Record<number, UserMaturityModel[]> = {};
        userPartialModelsWithAttachedMaturityModel.forEach((a) => {
            projectIdToUserMaturityModels[a.id] = a.userMaturityModels;
        });
        return projectIds.map((a) => projectIdToUserMaturityModels[a]);
    });
}
