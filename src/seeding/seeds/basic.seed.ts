import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { User } from "../../database/entities/user";
import { Project } from "../../database/entities/project";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { PartialModel } from "../../database/entities/partialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { UserEvaluationMetric } from "../../database/entities/userEvaluationMetric";
import { SYSTEM } from "../../constants";

export default class CreateBasicSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const user = await factory(User)()
            .map(async (t) => {
                return t;
            })
            .create();

        const userMaturityModels = await factory(UserMaturityModel)()
            .map(async (a) => {
                a.creator = user.id.toString();
                a.updater = user.id.toString();
                return a;
            })
            .createMany(2);

        const projects = await factory(Project)()
            .map(async (a) => {
                a.user = user;
                a.userMaturityModels = userMaturityModels;
                a.creator = user.id.toString();
                a.updater = user.id.toString();
                return a;
            })
            .createMany(3);

        const partialModelsData: PartialModel[] = [
            {
                name: "partialModelTest1",
                weight: 0.2,
                subPartialModels: [
                    {
                        name: "sub1_partialModelTest1",
                        weight: 0.1,
                        evaluationMetrics: [
                            {
                                name: "Geplant",
                                weight: 0.1,
                            },
                            {
                                name: "Evaluiert",
                                weight: 0.5,
                            },
                            {
                                name: "Eingeführt",
                                weight: 0.4,
                            },
                        ],
                    } as PartialModel,
                    {
                        name: "sub2_partialModelTest1",
                        weight: 0.1,
                        evaluationMetrics: [
                            {
                                name: "Geplant",
                                weight: 0.2,
                            },
                            {
                                name: "Evaluiert",
                                weight: 0.5,
                            },
                            {
                                name: "Eingeführt",
                                weight: 0.3,
                            },
                        ],
                    } as PartialModel,
                ],
            } as PartialModel,
            {
                name: "partialModelTest2",
                weight: 0.2,
                subPartialModels: [
                    {
                        name: "sub1_partialModelTest2",
                        weight: 0.1,
                        evaluationMetrics: [
                            {
                                name: "Geplant",
                                weight: 0.1,
                            },
                            {
                                name: "Evaluiert",
                                weight: 0.5,
                            },
                            {
                                name: "Eingeführt",
                                weight: 0.4,
                            },
                        ],
                    } as PartialModel,
                    {
                        name: "sub2_partialModelTest2",
                        weight: 0.1,
                        evaluationMetrics: [
                            {
                                name: "Geplant",
                                weight: 0.2,
                            },
                            {
                                name: "Evaluiert",
                                weight: 0.5,
                            },
                            {
                                name: "Eingeführt",
                                weight: 0.3,
                            },
                        ],
                    } as PartialModel,
                ],
            } as PartialModel,
        ];

        // function to create partialModels including unknown amount of nested subPartialModels and to create the corresponding evaluationMetric
        function resolvePartialModelsAcrossAllNestedLevels(partialModels: PartialModel[]): Promise<PartialModel>[] {
            return partialModels.map(
                async (a) =>
                    await factory(PartialModel)()
                        .map(async (b) => {
                            b.name = a.name;
                            b.weight = a.weight;
                            b.evaluationMetrics =
                                Array.isArray(a.evaluationMetrics) && a.evaluationMetrics.length
                                    ? await Promise.all(
                                          a.evaluationMetrics.map(
                                              async (c) =>
                                                  await factory(EvaluationMetric)()
                                                      .map(async (d) => {
                                                          d.name = c.name;
                                                          d.weight = c.weight;
                                                          d.creator = SYSTEM;
                                                          d.updater = SYSTEM;
                                                          return d;
                                                      })
                                                      .create(),
                                          ),
                                      )
                                    : [];
                            b.subPartialModels =
                                Array.isArray(a.subPartialModels) && a.subPartialModels.length
                                    ? await Promise.all(resolvePartialModelsAcrossAllNestedLevels(a.subPartialModels))
                                    : [];
                            b.creator = SYSTEM;
                            b.updater = SYSTEM;
                            return b;
                        })
                        .create(),
            );
        }

        const partialModels: PartialModel[] = await Promise.all(
            resolvePartialModelsAcrossAllNestedLevels(partialModelsData),
        );

        function resolveUserPartialModelsAcrossAllNestedLevels(
            partialModels: PartialModel[],
        ): Promise<UserPartialModel>[] {
            return partialModels.map(
                async (a) =>
                    await factory(UserPartialModel)()
                        .map(async (b) => {
                            b.partialModel = a;
                            b.userMaturityModel = userMaturityModels[0];
                            b.userEvaluationMetrics =
                                Array.isArray(a.evaluationMetrics) && a.evaluationMetrics.length
                                    ? await Promise.all(
                                          a.evaluationMetrics.map(
                                              async (c) =>
                                                  await factory(UserEvaluationMetric)()
                                                      .map(async (d) => {
                                                          d.evaluationMetric = c;
                                                          d.creator = user.id.toString();
                                                          d.updater = user.id.toString();
                                                          return d;
                                                      })
                                                      .create(),
                                          ),
                                      )
                                    : [];
                            b.subUserPartialModels =
                                Array.isArray(a.subPartialModels) && a.subPartialModels.length
                                    ? await Promise.all(
                                          resolveUserPartialModelsAcrossAllNestedLevels(a.subPartialModels),
                                      )
                                    : [];
                            b.creator = user.id.toString();
                            b.updater = user.id.toString();
                            return b;
                        })
                        .create(),
            );
        }
        const userPartialModels = await Promise.all(resolveUserPartialModelsAcrossAllNestedLevels(partialModels));
    }
}
