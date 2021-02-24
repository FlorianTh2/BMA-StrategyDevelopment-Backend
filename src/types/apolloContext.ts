import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { getManager } from "typeorm";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";
import { Dataloaders } from "./dataloaders";
import { createDataloaders } from "../dataLoaders";
import { User } from "../database/entities/user";

export interface ApolloContext {
    req: Request;
    res: Response;
    user: User;
    dataLoaders: ReturnType<typeof createDataloaders>;
    typeormManager: ReturnType<typeof getManager>;
}
