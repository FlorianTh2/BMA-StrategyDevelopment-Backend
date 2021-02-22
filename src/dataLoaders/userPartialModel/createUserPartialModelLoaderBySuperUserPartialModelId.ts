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
        return maturityModelsWithAttachedUserPartialModels.map((a) => a.subUserPartialModels);
    });
}
