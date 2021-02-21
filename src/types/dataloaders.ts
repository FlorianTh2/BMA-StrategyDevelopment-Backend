import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";
import { createProjectLoaderByMaturityModelId } from "../dataLoaders/project/createProjectLoaderByMaturityModelId";

export interface Dataloaders {
    project: {
        loaderByUserId: ReturnType<typeof createProjectLoaderByUserId>;
        loaderByMaturityModelId: ReturnType<typeof createProjectLoaderByMaturityModelId>;
    };
    user: {
        loaderByProjectId: ReturnType<typeof createUserLoaderByProjectId>;
    };
}
