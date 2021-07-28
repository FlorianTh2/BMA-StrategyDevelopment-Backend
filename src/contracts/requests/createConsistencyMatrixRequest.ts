export interface CreateConsistencyMatrixRequest {
    name: string;
    filename: string;
    description: string;
    consistencyMatrixBlobBase64String: string;
    projectId: string;
}
