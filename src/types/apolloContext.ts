import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { getManager } from "typeorm";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";
import { Dataloaders } from "./dataloaders";
import { createDataloaders } from "../dataLoaders";

export interface ApolloContext {
    req: Request;
    res: Response;
    dataLoaders: ReturnType<typeof createDataloaders>;
    typeormManager: ReturnType<typeof getManager>;
}
