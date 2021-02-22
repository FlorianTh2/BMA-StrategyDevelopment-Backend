import { Dataloaders } from "../types/dataloaders";
import { createProjectLoaderByUserId } from "./project/createProjectLoaderByUserId";
import { createUserLoaderByProjectId } from "./user/createUserLoaderByProjectId";
import { createProjectLoaderByMaturityModelId } from "./project/createProjectLoaderByMaturityModelId";
import { createUserPartialModelLoaderByMaturityModelId } from "./userPartialModel/createUserPartialModelLoaderByMaturityModelId";
import { createMaturityModelLoaderByUserPartialModelId } from "./maturityModel/createMaturityModelLoaderByUserPartialModelId";
import { createMaturityModelLoaderByProjectId } from "./maturityModel/createMaturityModelLoaderByProjectId";
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

export function createDataloaders(): Dataloaders {
    return {
        project: {
            loaderByUserId: createProjectLoaderByUserId(),
            loaderByMaturityModelId: createProjectLoaderByMaturityModelId(),
        },
        user: {
            loaderByProjectId: createUserLoaderByProjectId(),
        },
        maturityModel: {
            loaderByProjectId: createMaturityModelLoaderByProjectId(),
            loaderByUserPartialModelId: createMaturityModelLoaderByUserPartialModelId(),
        },
        userPartialModel: {
            loaderByMaturityModelId: createUserPartialModelLoaderByMaturityModelId(),
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
        },
        evaluationMetric: {
            loaderByPartialModelId: createEvaluationMetricLoaderByPartialModelId(),
            loaderByUserEvaluationMetricId: createEvaluationMetricLoaderByUserEvaluationMetricId(),
        },
    };
}
