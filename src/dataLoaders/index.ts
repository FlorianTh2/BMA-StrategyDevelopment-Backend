import { Dataloaders } from "../types/dataloaders";
import { createProjectLoaderByUserId } from "./project/createProjectLoaderByUserId";
import { createUserLoaderByProjectId } from "./user/createUserLoaderByProjectId";
import { createProjectLoaderByMaturityModelId } from "./project/createProjectLoaderByMaturityModelId";
import { createUserPartialModelLoaderByMaturityModelId } from "./userPartialModel/createUserPartialModelLoaderByMaturityModelId";

export function createDataloaders(): Dataloaders {
    return {
        project: {
            loaderByUserId: createProjectLoaderByUserId(),
            loaderByMaturityModelId: createProjectLoaderByMaturityModelId(),
        },
        user: {
            loaderByProjectId: createUserLoaderByProjectId(),
        },
        userPartialModel: {
            loaderByMaturityModelId: createUserPartialModelLoaderByMaturityModelId(),
        },
    };
}
