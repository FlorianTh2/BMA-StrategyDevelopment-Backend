import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";
import { createProjectLoaderByMaturityModelId } from "../dataLoaders/project/createProjectLoaderByMaturityModelId";
import { createUserPartialModelLoaderByMaturityModelId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderByMaturityModelId";
import { createMaturityModelLoaderByUserPartialModelId } from "../dataLoaders/maturityModel/createMaturityModelLoaderByUserPartialModelId";
import { createMaturityModelLoaderByProjectId } from "../dataLoaders/maturityModel/createMaturityModelLoaderByProjectId";
import { createUserPartialModelLoaderByUserPartialModelId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderByUserPartialModelId";

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
        loaderByProjectId: ReturnType<typeof createMaturityModelLoaderByProjectId>;
    };
    userPartialModel: {
        loaderByMaturityModelId: ReturnType<typeof createUserPartialModelLoaderByMaturityModelId>;
        loaderByUserPartialModelId: ReturnType<typeof createUserPartialModelLoaderByUserPartialModelId>;
    };
}
