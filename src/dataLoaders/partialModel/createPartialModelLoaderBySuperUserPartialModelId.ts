import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { PartialModel } from "../../database/entities/partialModel";

export function createPartialModelLoaderBySuperPartialModelId() {
    return new DataLoader<number, PartialModel[]>(async (superPartialModelIds) => {
        const userWithAttachedProjects = await getRepository(PartialModel).findByIds(superPartialModelIds as number[], {
            relations: ["subPartialModels"],
        });
        const superPartialModelIdToSubPartialModels: Record<number, PartialModel[]> = {};
        userWithAttachedProjects.forEach((a) => {
            superPartialModelIdToSubPartialModels[a.id] = a.subPartialModels;
        });
        return superPartialModelIds.map((a) => superPartialModelIdToSubPartialModels[a]);
    });
}
