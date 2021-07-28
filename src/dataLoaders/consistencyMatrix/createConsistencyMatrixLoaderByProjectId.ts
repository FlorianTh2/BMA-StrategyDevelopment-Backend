import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { ConsistencyMatrix } from "../../database/entities/consistencyMatrix";

export function createConsistencyMatrixLoaderByProjectId() {
    return new DataLoader<number, ConsistencyMatrix[]>(async (projectIds) => {
        const projectsWithAttachedConsistencyMatrices = await getRepository(Project).findByIds(projectIds as number[], {
            relations: ["consistencyMatrices"],
        });
        const projectIdToConsistencyMatrix: Record<number, ConsistencyMatrix[]> = {};
        projectsWithAttachedConsistencyMatrices.forEach((a) => {
            projectIdToConsistencyMatrix[a.id] = a.consistencyMatrices;
        });
        return projectIds.map((a) => projectIdToConsistencyMatrix[a]);
    });
}
