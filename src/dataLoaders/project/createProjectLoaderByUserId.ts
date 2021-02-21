import DataLoader from "dataloader";
import { getRepository } from "typeorm";
import { Project } from "../../entities/project";
import { User } from "../../entities/user";

// naming based on output (what it loads), not on input
export function createProjectLoaderByUserId() {
    return new DataLoader<number, Project[]>(async (userIds) => {
        console.log("hi4");
        const userWithAttachedProjects = await getRepository(User).findByIds(userIds as number[], {
            relations: ["projects"],
        });
        return userWithAttachedProjects.map((a) => a.projects);
    });
}
