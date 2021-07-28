import { Dataloaders } from "../types/dataloaders";
import { createProjectLoaderByUserId } from "./project/createProjectLoaderByUserId";
import { createUserLoaderByProjectId } from "./user/createUserLoaderByProjectId";
import { createProjectLoaderByUserMaturityModelId } from "./project/createProjectLoaderByUserMaturityModelId";
import { createUserPartialModelLoaderByUserMaturityModelId } from "./userPartialModel/createUserPartialModelLoaderByUserMaturityModelId";
import { createUserMaturityModelLoaderByUserPartialModelId } from "./userMaturityModel/createUserMaturityModelLoaderByUserPartialModelId";
import { createUserMaturityModelLoaderByProjectId } from "./userMaturityModel/createUserMaturityModelLoaderByProjectId";
import { createUserPartialModelLoaderBySuperUserPartialModelId } from "./userPartialModel/createUserPartialModelLoaderBySuperUserPartialModelId";
import { createUserPartialModelLoaderBySubUserPartialModelId } from "./userPartialModel/createUserPartialModelLoaderBySubUserPartialModelId";
import { createUserEvaluationMetricLoaderByUserPartialModelId } from "./userEvaluationMetric/createUserEvaluationMetricLoaderByUserPartialModelId";
import { createPartialModelLoaderBySuperPartialModelId } from "./partialModel/createPartialModelLoaderBySuperUserPartialModelId";
import { createPartialModelLoaderBySubPartialModelId } from "./partialModel/createPartialModelLoaderBySubPartialModelId";
import { createPartialModelLoaderByUserPartialModelId } from "./partialModel/createPartialModelLoaderByUserPartialModelId";
import { createEvaluationMetricLoaderByPartialModelId } from "./evaluationMetric/createEvaluationMetricLoaderByPartialModelId";
import { createPartialModelLoaderByEvaluationMetricId } from "./partialModel/createPartialModelLoaderByEvaluationMetricId";
import { createUserPartialModelLoaderByUserEvaluationMetricId } from "./userPartialModel/createUserPartialModelLoaderByUserEvaluationMetricId";
import { createEvaluationMetricLoaderByUserEvaluationMetricId } from "./evaluationMetric/createEvaluationMetricLoaderByUserEvaluationMetricId";
import { createPartialModelLoaderByMaturityModelId } from "./partialModel/createPartialModelLoaderByMaturityModelId";
import { createProjectLoaderByConsistencyMatrixId } from "./project/createProjectLoaderByConsistencyMatrixId";
import { createConsistencyMatrixLoaderByProjectId } from "./consistencyMatrix/createConsistencyMatrixLoaderByProjectId";

export function createDataloaders(): Dataloaders {
    return {
        project: {
            loaderByUserId: createProjectLoaderByUserId(),
            loaderByUserMaturityModelId: createProjectLoaderByUserMaturityModelId(),
            loaderByConsistencyMatrixId: createProjectLoaderByConsistencyMatrixId(),
        },
        user: {
            loaderByProjectId: createUserLoaderByProjectId(),
        },
        consistencyMatrix: {
            loaderByProjectId: createConsistencyMatrixLoaderByProjectId(),
        },
        userMaturityModel: {
            loaderByProjectId: createUserMaturityModelLoaderByProjectId(),
            loaderByUserPartialModelId: createUserMaturityModelLoaderByUserPartialModelId(),
        },
        userPartialModel: {
            loaderByUserMaturityModelId: createUserPartialModelLoaderByUserMaturityModelId(),
            loaderBySubUserPartialModelId: createUserPartialModelLoaderBySubUserPartialModelId(),
            loaderBySuperUserPartialModelId: createUserPartialModelLoaderBySuperUserPartialModelId(),
            loaderByUserEvaluationMetric: createUserPartialModelLoaderByUserEvaluationMetricId(),
        },
        userEvaluationMetric: {
            loaderByUserPartialModelId: createUserEvaluationMetricLoaderByUserPartialModelId(),
        },
        partialModel: {
            loaderByUserPartialModelId: createPartialModelLoaderByUserPartialModelId(),
            loaderBySubPartialModelId: createPartialModelLoaderBySubPartialModelId(),
            loaderBySuperPartialModelId: createPartialModelLoaderBySuperPartialModelId(),
            loaderByEvaluationMetricId: createPartialModelLoaderByEvaluationMetricId(),
            loaderByMaturityModelId: createPartialModelLoaderByMaturityModelId(),
        },
        evaluationMetric: {
            loaderByPartialModelId: createEvaluationMetricLoaderByPartialModelId(),
            loaderByUserEvaluationMetricId: createEvaluationMetricLoaderByUserEvaluationMetricId(),
        },
    };
}
