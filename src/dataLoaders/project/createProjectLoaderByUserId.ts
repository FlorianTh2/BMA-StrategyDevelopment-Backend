import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { User } from "../../database/entities/user";
import { UserPartialModel } from "../../database/entities/userPartialModel";

// naming based on output (what it loads), not on input
export function createProjectLoaderByUserId() {
    return new DataLoader<number, Project[]>(async (userIds) => {
        const userWithAttachedProjects = await getRepository(User).findByIds(userIds as number[], {
            relations: ["projects"],
        });
        const userIdToProject: Record<number, Project[]> = {};
        userWithAttachedProjects.forEach((a) => {
            userIdToProject[a.id] = a.projects;
        });
        return userIds.map((a) => userIdToProject[a]);
    });
}
