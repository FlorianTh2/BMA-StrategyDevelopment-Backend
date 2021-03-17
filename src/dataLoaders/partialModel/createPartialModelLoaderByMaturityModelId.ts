import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { PartialModel } from "../../database/entities/partialModel";
import { MaturityModel } from "../../database/entities/maturityModel";

export function createPartialModelLoaderByMaturityModelId() {
    return new DataLoader<number, PartialModel[]>(async (maturityModelIds) => {
        const userWithAttachedProjects = await getRepository(MaturityModel).findByIds(maturityModelIds as number[], {
            relations: ["partialModels"],
        });
        const maturityModelIdToPartialModels: Record<number, PartialModel[]> = {};
        userWithAttachedProjects.forEach((a) => {
            maturityModelIdToPartialModels[a.id] = a.partialModels;
        });
        return maturityModelIds.map((a) => maturityModelIdToPartialModels[a]);
    });
}
