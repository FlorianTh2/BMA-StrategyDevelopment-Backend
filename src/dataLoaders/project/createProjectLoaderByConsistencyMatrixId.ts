import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { ConsistencyMatrix } from "../../database/entities/consistencyMatrix";

export function createProjectLoaderByConsistencyMatrixId() {
    return new DataLoader<number, Project>(async (consistencyMatrixIds) => {
        const consistencyMatrixWithAttechedProjects = await getRepository(ConsistencyMatrix).findByIds(
            consistencyMatrixIds as number[],
            {
                relations: ["project"],
            },
        );
        const maturityModelIdToProject: Record<number, Project> = {};
        consistencyMatrixWithAttechedProjects.forEach((a) => {
            maturityModelIdToProject[a.id] = a.project;
        });
        return consistencyMatrixIds.map((a) => maturityModelIdToProject[a]);
    });
}
