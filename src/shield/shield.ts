import { allow, deny, rule, shield } from "graphql-shield";
import { ForbiddenError } from "apollo-server-errors";
import { ApolloContext } from "../types/apolloContext";
import { User } from "../database/entities/user";

const isAuthenticated = rule({ cache: "contextual" })(async (parent, args, context: ApolloContext, info) => {
    const tmp =
        context.userId !== undefined &&
        (await context.typeormManager.getRepository(User).findOne(context.userId)) !== undefined;
    console.log(tmp);
    return tmp;
});

const isAdmin = rule({ cache: "contextual" })(async (parent, args, context: ApolloContext, info) => {
    return false;
});

// problem: you should only be capable of getting your own stuff
// solution: think about your domain:
//  1. projects should be accessable by user: provide endpoint: projectsOfUser (and maybe projectOfUser)
//      - projectOfUser: its parameter=projectId (behind the scences: the userId is taken from the jwt)
//      - projectsOfUser: no parameter
//      -> from this project you can go nested queries: query{projectOfUser(id){maturityModel{userPartialModels{...}}}}
//      -> for this nested queries you dont need to authenticate again
//  2. think about which point is your "centralPoint" at which you should do nested queries like describes above
//      -> just project? maybe a bit to top-level -> means that you have to always start with project and then join-through the nested-queries till you have your desired ressource
//      - maybe maturityModel -> yea maybe
//  3. provide for maturityModel:
//      3.1 maturityModelOfUser(maturityModelId) -> precondition: you get maturityModelId e.g. query{projectsOfUser{maturityModel{id}}}
//      3.2 maturityModelsOfProjectOfUser(projectId)
//  4. allow partialModel(s) and evaluationMetric(s)
//  5. allow login and signup
//  6. deny all others
export const permissions = shield(
    {
        Query: {
            partialModel: allow,
            partialModels: allow,
            evaluationMetric: allow,
            evaluationMetrics: allow,
            projectOfUser: isAuthenticated,
            projectsOfUser: isAuthenticated,
            profileOfUser: isAuthenticated,
            maturityModelOfUser: isAuthenticated,
            maturityModelsOfUser: isAuthenticated,
        },
        Mutation: {
            // "*": deny
            login: allow,
            register: allow,
        },
        Project: allow,
        User: allow,
        MaturityModel: allow,
        UserPartialModel: allow,
        UserEvaluationMetric: allow,
        PartialModel: allow,
        EvaluationMetric: allow,
    },
    {
        allowExternalErrors: true,
        fallbackRule: isAdmin,
        fallbackError: new ForbiddenError("No access allowed!"),
    },
);
