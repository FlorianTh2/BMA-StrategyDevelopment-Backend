import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";

export interface Dataloaders {
    project: {
        loaderByUserId: ReturnType<typeof createProjectLoaderByUserId>;
    };
    user: {
        loaderByProjectId: ReturnType<typeof createUserLoaderByProjectId>;
    };
}
