import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { PartialModel } from "../../database/entities/partialModel";

export function createPartialModelLoaderBySubPartialModelId() {
    return new DataLoader<number, PartialModel>(async (subPartialModelIds) => {
        const userWithAttachedProjects = await getRepository(PartialModel).findByIds(subPartialModelIds as number[], {
            relations: ["superPartialModel"],
        });
        const subPartialModelIdToSuperPartialModel: Record<number, PartialModel> = {};
        userWithAttachedProjects.forEach((a) => {
            subPartialModelIdToSuperPartialModel[a.id] = a.superPartialModel;
        });
        return subPartialModelIds.map((a) => subPartialModelIdToSuperPartialModel[a]);
    });
}
