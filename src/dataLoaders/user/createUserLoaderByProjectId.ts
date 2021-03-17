import DataLoader from "dataloader";
import { User } from "../../database/entities/user";
import { getRepository } from "typeorm";
import { Project } from "../../database/entities/project";
import { UserPartialModel } from "../../database/entities/userPartialModel";

// export const createUserLoaderByProjectId = () => {
//     return new DataLoader<number, User>(async (userIds) => {
//         const userRepository = getRepository(User);
//         const users: User[] = await userRepository.findByIds(userIds as number[]);
//         return users;
//     });
// };

export function createUserLoaderByProjectId() {
    return new DataLoader<number, User>(async (projectIds) => {
        const projectsWithAttachedUser = await getRepository(Project).findByIds(projectIds as number[], {
            relations: ["user"],
        });
        const projectIdToUser: Record<number, User> = {};
        projectsWithAttachedUser.forEach((a) => {
            projectIdToUser[a.id] = a.user;
        });
        return projectIds.map((a) => projectIdToUser[a]);
    });
}
