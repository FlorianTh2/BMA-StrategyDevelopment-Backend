import { getManager } from "typeorm";
import { createDataloaders } from "../dataLoaders";
import { User } from "../database/entities/user";

export interface ApolloContext {
    req: Request;
    res: Response;
    user: User;
    dataLoaders: ReturnType<typeof createDataloaders>;
    typeormManager: ReturnType<typeof getManager>;
}
