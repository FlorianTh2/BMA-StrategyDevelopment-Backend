import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export function createUserPartialModelLoaderBySuperUserPartialModelId() {
    return new DataLoader<number, UserPartialModel[]>(async (userPartialModelIds) => {
        const maturityModelsWithAttachedUserPartialModels = await getRepository(UserPartialModel).findByIds(
            userPartialModelIds as number[],
            {
                relations: ["subUserPartialModels"],
            },
        );
        const userPartialModelIdToSubUserPartialModel: Record<number, UserPartialModel[]> = {};
        maturityModelsWithAttachedUserPartialModels.forEach((a) => {
            userPartialModelIdToSubUserPartialModel[a.id] = a.subUserPartialModels;
        });
        return userPartialModelIds.map((a) => userPartialModelIdToSubUserPartialModel[a]);
    });
}
