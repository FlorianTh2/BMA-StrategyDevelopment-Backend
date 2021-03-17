import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { User } from "../../database/entities/user";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { PartialModel } from "../../database/entities/partialModel";

// naming based on output (what it loads), not on input
export function createUserPartialModelLoaderBySubUserPartialModelId() {
    return new DataLoader<number, UserPartialModel>(async (userPartialModelIds) => {
        const maturityModelsWithAttachedSuperUserPartialModels = await getRepository(UserPartialModel).findByIds(
            userPartialModelIds as number[],
            {
                relations: ["superUserPartialModel"],
            },
        );
        const userPartialModelIdToSuperUserPartialModel: Record<number, UserPartialModel> = {};
        maturityModelsWithAttachedSuperUserPartialModels.forEach((a) => {
            userPartialModelIdToSuperUserPartialModel[a.id] = a.superUserPartialModel;
        });
        return userPartialModelIds.map((a) => userPartialModelIdToSuperUserPartialModel[a]);
    });
}
