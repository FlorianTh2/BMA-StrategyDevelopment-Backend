import { CreateUserPartialModelRequest } from "./createUserPartialModelRequest";

export interface CreateUserMaturityModelRequest {
    name: string;
    maturityLevel: number;
    projectId: string;
    userPartialModels: CreateUserPartialModelRequest[];
}
