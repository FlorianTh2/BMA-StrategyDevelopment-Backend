import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { User } from "../../database/entities/user";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { UserPartialModel } from "../../database/entities/userPartialModel";

// naming based on output (what it loads), not on input
export function createUserPartialModelLoaderByUserMaturityModelId() {
    return new DataLoader<number, UserPartialModel[]>(async (maturityModelIds) => {
        const maturityModelsWithAttachedUserPartialModels = await getRepository(UserMaturityModel).findByIds(
            maturityModelIds as number[],
            {
                relations: ["userPartialModels"],
            },
        );
        return maturityModelsWithAttachedUserPartialModels.map((a) => a.userPartialModels);
    });
}
