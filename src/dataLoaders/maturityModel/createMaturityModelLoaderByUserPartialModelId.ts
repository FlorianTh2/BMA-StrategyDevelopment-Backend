import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { MaturityModel } from "../../database/entities/maturityModel";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export function createMaturityModelLoaderByUserPartialModelId() {
    return new DataLoader<number, MaturityModel>(async (userPartialModelIds) => {
        const userPartialModelsWithAttachedMaturityModel = await getRepository(UserPartialModel).findByIds(
            userPartialModelIds as number[],
            {
                relations: ["maturityModel"],
            },
        );
        return userPartialModelsWithAttachedMaturityModel.map((a) => a.maturityModel);
    });
}
