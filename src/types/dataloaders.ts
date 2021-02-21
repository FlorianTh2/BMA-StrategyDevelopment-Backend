import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";
import { createProjectLoaderByMaturityModelId } from "../dataLoaders/project/createProjectLoaderByMaturityModelId";
import { createUserPartialModelLoaderByMaturityModelId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderByMaturityModelId";
import { createMaturityModelLoaderByUserPartialModelId } from "../dataLoaders/maturityModel/createMaturityModelLoaderByUserPartialModelId";

export interface Dataloaders {
    project: {
        loaderByUserId: ReturnType<typeof createProjectLoaderByUserId>;
        loaderByMaturityModelId: ReturnType<typeof createProjectLoaderByMaturityModelId>;
    };
    user: {
        loaderByProjectId: ReturnType<typeof createUserLoaderByProjectId>;
    };
    maturityModel: {
        loaderByUserPartialModelId: ReturnType<typeof createMaturityModelLoaderByUserPartialModelId>;
    };
    userPartialModel: {
        loaderByMaturityModelId: ReturnType<typeof createUserPartialModelLoaderByMaturityModelId>;
    };
}
