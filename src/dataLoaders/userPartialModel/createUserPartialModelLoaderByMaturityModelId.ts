import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { User } from "../../database/entities/user";
import { MaturityModel } from "../../database/entities/maturityModel";
import { UserPartialModel } from "../../database/entities/userPartialModel";

// naming based on output (what it loads), not on input
export function createUserPartialModelLoaderByMaturityModelId() {
    return new DataLoader<number, UserPartialModel[]>(async (maturityModelIds) => {
        const maturityModelsWithAttachedUserPartialModels = await getRepository(MaturityModel).findByIds(
            maturityModelIds as number[],
            {
                relations: ["userPartialModels"],
            },
        );
        return maturityModelsWithAttachedUserPartialModels.map((a) => a.userPartialModels);
    });
}
