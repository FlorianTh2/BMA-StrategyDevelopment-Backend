import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { PartialModel } from "../../database/entities/partialModel";

export function createPartialModelLoaderByUserPartialModelId() {
    return new DataLoader<number, PartialModel>(async (userPartialModelIds) => {
        const userWithAttachedProjects = await getRepository(UserPartialModel).findByIds(
            userPartialModelIds as number[],
            {
                relations: ["partialModel"],
            },
        );
        return userWithAttachedProjects.map((a) => a.partialModel);
    });
}
