import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";
import { createProjectLoaderByMaturityModelId } from "../dataLoaders/project/createProjectLoaderByMaturityModelId";
import { createUserPartialModelLoaderByMaturityModelId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderByMaturityModelId";

export interface Dataloaders {
    project: {
        loaderByUserId: ReturnType<typeof createProjectLoaderByUserId>;
        loaderByMaturityModelId: ReturnType<typeof createProjectLoaderByMaturityModelId>;
    };
    user: {
        loaderByProjectId: ReturnType<typeof createUserLoaderByProjectId>;
    };
    userPartialModel: {
        loaderByMaturityModelId: ReturnType<typeof createUserPartialModelLoaderByMaturityModelId>;
    };
}
