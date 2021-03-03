import { ApolloContext } from "../../types/apolloContext";
import { PartialModel } from "../../database/entities/partialModel";
import { MaturityModel } from "../../database/entities/maturityModel";
import { ID_OF_MATURITYMODEL } from "../../constants";

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
                    evaluationMetrics: await context.dataLoaders.evaluationMetric.loaderByPartialModelId.load(a.id),
                    subPartialModels: await loadPartialModelsOfMaturityModel(context, a as PartialModel),
                } as PartialModel;
            }),
        );
    } else {
        return [];
    }
}

export async function loadFullMaturityModel(context: ApolloContext): Promise<MaturityModel> {
    const dbResult: MaturityModel = (await context.typeormManager
        .getRepository(MaturityModel)
        .findOne({ where: { id: ID_OF_MATURITYMODEL }, relations: ["partialModels"] })) as MaturityModel;
    dbResult.partialModels = await Promise.all(
        dbResult.partialModels.map(async (a) => {
            return {
                ...a,
                subPartialModels: await loadPartialModelsOfMaturityModel(context, a),
            };
        }),
    );
    return dbResult;
}
