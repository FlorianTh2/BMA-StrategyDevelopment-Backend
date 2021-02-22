import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { PartialModel } from "../../database/entities/partialModel";

export function createPartialModelLoaderBySuperPartialModelId() {
    return new DataLoader<number, PartialModel[]>(async (superPartialModelIds) => {
        const userWithAttachedProjects = await getRepository(PartialModel).findByIds(superPartialModelIds as number[], {
            relations: ["subPartialModels"],
        });
        return userWithAttachedProjects.map((a) => a.subPartialModels);
    });
}
