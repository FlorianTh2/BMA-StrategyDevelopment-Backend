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
        const userPartialModelToUserMaturityModel: Record<number, UserMaturityModel> = {};
        userPartialModelsWithAttachedMaturityModel.forEach((a) => {
            userPartialModelToUserMaturityModel[a.id] = a.userMaturityModel;
        });
        return userPartialModelIds.map((a) => userPartialModelToUserMaturityModel[a]);
    });
}
