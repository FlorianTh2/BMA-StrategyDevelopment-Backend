import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { PartialModel } from "../../database/entities/partialModel";
import { User } from "../../database/entities/user";

export function createPartialModelLoaderByUserPartialModelId() {
    return new DataLoader<number, PartialModel>(async (userPartialModelIds) => {
        const userWithAttachedProjects = await getRepository(UserPartialModel).findByIds(
            userPartialModelIds as number[],
            {
                relations: ["partialModel"],
            },
        );
        // const partialModels = userWithAttachedProjects.map((a) => a.partialModel);
        const userPartialModelIdToPartialModel: Record<number, PartialModel> = {};
        userWithAttachedProjects.map((a) => {
            userPartialModelIdToPartialModel[a.id] = a.partialModel;
        });
        return userPartialModelIds.map((a) => userPartialModelIdToPartialModel[a]);
    });
}
