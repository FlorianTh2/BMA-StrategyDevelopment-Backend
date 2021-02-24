import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export function createUserMaturityModelLoaderByUserPartialModelId() {
    return new DataLoader<number, UserMaturityModel>(async (userPartialModelIds) => {
        const userPartialModelsWithAttachedMaturityModel = await getRepository(UserPartialModel).findByIds(
            userPartialModelIds as number[],
            {
                relations: ["userMaturityModel"],
            },
        );
        return userPartialModelsWithAttachedMaturityModel.map((a) => a.userMaturityModel);
    });
}
