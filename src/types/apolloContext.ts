import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { getManager } from "typeorm";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";
import { Dataloaders } from "./dataloaders";

export interface ApolloContext {
    req: Request;
    res: Response;
    dataLoaders: Dataloaders;
    typeormManager: ReturnType<typeof getManager>;
}
