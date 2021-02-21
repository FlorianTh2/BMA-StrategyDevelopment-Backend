import { User as UserEntity } from "../../database/entities/user";
import { Project } from "../../database/entities/project";
import { ApolloContext } from "../../types/apolloContext";

// called with queries like: query{user{projects{id}}}
export const User = {
    projects: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const userId = parent.id;

        // resolver business logic
        // without dataloader
        // 1 project + 3 projects = creates 2 db queries -> 1 since this is a nested-resolver: 3 db-queries with parent-query
        //  (creates only 1 db query (without parent) when using findOne -> i guess findOne needs one extra query
        //  to fetch for DISTINCT)
        // 2 project +3 projects = creates 2*2 db queries + 1 (parent-query) = 5 db-queries (tested)
        // const dbResult: UserEntity = await context.typeormManager
        //     .getRepository(UserEntity)
        //     .findOne({ where: { id: id }, relations: ["projects"] });
        // const userProjects: Project[] = dbResult.projects;

        // with dataloader
        const userProjects: Project[] = await context.dataLoaders.project.loaderByUserId.load(userId);

        // resolver return
        const resolverResult = [...userProjects];
        return resolverResult;
    },
};
