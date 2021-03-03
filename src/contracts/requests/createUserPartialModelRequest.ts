import { CreateUserEvaluationMetricRequest } from "./createUserEvaluationMetricRequest";

export interface CreateUserPartialModelRequest {
    maturityLevelEvaluationMetrics: number;
    partialModelId: string;
    userEvaluationMetrics: CreateUserEvaluationMetricRequest[];
    subUserPartialModels: CreateUserPartialModelRequest[];
    superUserPartialModel: CreateUserPartialModelRequest;
}
