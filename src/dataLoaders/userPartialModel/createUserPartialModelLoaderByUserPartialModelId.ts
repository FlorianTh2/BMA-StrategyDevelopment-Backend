import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { User } from "../../database/entities/user";
import { MaturityModel } from "../../database/entities/maturityModel";
import { UserPartialModel } from "../../database/entities/userPartialModel";

// naming based on output (what it loads), not on input
export function createUserPartialModelLoaderByUserPartialModelId() {
    return new DataLoader<number, UserPartialModel>(async (userPartialModelIds) => {
        const maturityModelsWithAttachedUserPartialModels = await getRepository(UserPartialModel).findByIds(
            userPartialModelIds as number[],
            {
                relations: ["superUserPartialModel"],
            },
        );
        return maturityModelsWithAttachedUserPartialModels.map((a) => a.superUserPartialModel);
    });
}
