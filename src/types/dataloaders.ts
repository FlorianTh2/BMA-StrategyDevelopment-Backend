import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";
import { createProjectLoaderByMaturityModelId } from "../dataLoaders/project/createProjectLoaderByMaturityModelId";
import { createUserPartialModelLoaderByMaturityModelId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderByMaturityModelId";
import { createMaturityModelLoaderByUserPartialModelId } from "../dataLoaders/maturityModel/createMaturityModelLoaderByUserPartialModelId";
import { createMaturityModelLoaderByProjectId } from "../dataLoaders/maturityModel/createMaturityModelLoaderByProjectId";
import { createUserPartialModelLoaderBySuperUserPartialModelId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderBySuperUserPartialModelId";
import { createUserPartialModelLoaderBySubUserPartialModelId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderBySubUserPartialModelId";
import { createUserEvaluationMetricLoaderByUserPartialModelId } from "../dataLoaders/userEvaluationMetric/createUserEvaluationMetricLoaderByUserPartialModelId";
import { createPartialModelLoaderBySuperPartialModelId } from "../dataLoaders/partialModel/createPartialModelLoaderBySuperUserPartialModelId";
import { createPartialModelLoaderBySubPartialModelId } from "../dataLoaders/partialModel/createPartialModelLoaderBySubPartialModelId";
import { createPartialModelLoaderByUserPartialModelId } from "../dataLoaders/partialModel/createPartialModelLoaderByUserPartialModelId";
import { createEvaluationMetricLoaderByPartialModelId } from "../dataLoaders/evaluationMetric/createEvaluationMetricLoaderByPartialModelId";
import { createPartialModelLoaderByEvaluationMetricId } from "../dataLoaders/partialModel/createPartialModelLoaderByEvaluationMetricId";
import { createUserPartialModelLoaderByUserEvaluationMetricId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderByUserEvaluationMetricId";
import { createEvaluationMetricLoaderByUserEvaluationMetricId } from "../dataLoaders/evaluationMetric/createEvaluationMetricLoaderByUserEvaluationMetricId";

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
        loaderBySubUserPartialModelId: ReturnType<typeof createUserPartialModelLoaderBySubUserPartialModelId>;
        loaderBySuperUserPartialModelId: ReturnType<typeof createUserPartialModelLoaderBySuperUserPartialModelId>;
        loaderByUserEvaluationMetric: ReturnType<typeof createUserPartialModelLoaderByUserEvaluationMetricId>;
    };
    userEvaluationMetric: {
        loaderByUserPartialModelId: ReturnType<typeof createUserEvaluationMetricLoaderByUserPartialModelId>;
    };
    partialModel: {
        loaderByUserPartialModelId: ReturnType<typeof createPartialModelLoaderByUserPartialModelId>;
        loaderBySubPartialModelId: ReturnType<typeof createPartialModelLoaderBySubPartialModelId>;
        loaderBySuperPartialModelId: ReturnType<typeof createPartialModelLoaderBySuperPartialModelId>;
        loaderByEvaluationMetricId: ReturnType<typeof createPartialModelLoaderByEvaluationMetricId>;
    };
    evaluationMetric: {
        loaderByPartialModelId: ReturnType<typeof createEvaluationMetricLoaderByPartialModelId>;
        loaderByUserEvaluationMetricId: ReturnType<typeof createEvaluationMetricLoaderByUserEvaluationMetricId>;
    };
}
