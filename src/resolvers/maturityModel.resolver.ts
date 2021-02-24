import { ApolloContext } from "../types/apolloContext";
import { getManager } from "typeorm";
import { MaturityModel } from "../database/entities/maturityModel";
import { PartialModel } from "../database/entities/partialModel";
import { UserMaturityModel } from "../database/entities/userMaturityModel";

// const dbResult = (await context.typeormManager
//     .getRepository(MaturityModel)
//     .findOne({ where: { id: 1 }, relations: ["partialModels"] })) as MaturityModel;
// dbResult.partialModels = await Promise.all(
//     dbResult.partialModels.map(async (a) => {
//         return {
//             ...a,
//             subPartialModels: await loadPartialModelsOfMaturityModel(context, a),
//         };
//     }),
// );
async function loadPartialModelsOfMaturityModel(
    context: ApolloContext,
    partialModel: PartialModel,
): Promise<PartialModel[]> {
    const subPartialModels = await context.dataLoaders.partialModel.loaderBySuperPartialModelId.load(partialModel.id);
    if (Array.isArray(subPartialModels) && subPartialModels.length) {
        return await Promise.all(
            subPartialModels.map(async (a) => {
                return {
                    ...a,
                    subPartialModels: await loadPartialModelsOfMaturityModel(context, a as PartialModel),
                } as PartialModel;
            }),
        );
    } else {
        return [];
    }
}

export const maturityModelQuery = {
    async maturityModel(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        // load full maturityModel

        const dbResult = await context.typeormManager.getRepository(MaturityModel).findOne({ where: { id: id } });

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
};

export const maturityModelMutation = {};
