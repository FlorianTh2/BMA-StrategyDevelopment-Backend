import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { User } from "../../database/entities/user";
import { Project } from "../../database/entities/project";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { PartialModel } from "../../database/entities/partialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { UserEvaluationMetric } from "../../database/entities/userEvaluationMetric";
import { MAX_VALUE_PER_METRIC, SYSTEM } from "../../constants";
import { MaturityModel } from "../../database/entities/maturityModel";
import { maturityModel_partialModel_exampleData } from "../data/maturityModel_PartialModel_ExampleData";
import { generateSHA512Hash } from "../../utils/authorization/cryptography";
import * as faker from "faker";

export default class CreateBasicSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const admin = await factory(User)()
            .map(async (t) => {
                t.email = process.env.ADMIN_EMAIL as string;
                t.password = generateSHA512Hash(process.env.ADMIN_PW as string);
                t.firstname = "admin";
                t.lastname = "admin";
                return t;
            })
            .create();

        const users = await factory(User)()
            .map(async (t) => {
                t.email = faker.internet.email().toLocaleLowerCase();
                t.password = generateSHA512Hash(process.env.USER_PW as string);
                t.firstname = faker.name.firstName();
                t.lastname = faker.name.lastName();
                return t;
            })
            .createMany(3);

        const userMaturityModels = await factory(UserMaturityModel)()
            .map(async (a) => {
                a.creator = admin.id.toString();
                a.updater = admin.id.toString();
                return a;
            })
            .createMany(1);

        const projects = await factory(Project)()
            .map(async (a) => {
                a.user = admin;
                a.userMaturityModels = userMaturityModels;
                a.creator = admin.id.toString();
                a.updater = admin.id.toString();
                return a;
            })
            .createMany(3);

        const partialModelsData: PartialModel[] = maturityModel_partialModel_exampleData;

        // function to create partialModels including unknown amount of nested subPartialModels and to create the corresponding evaluationMetric
        function resolvePartialModelsAcrossAllNestedLevels(partialModels: PartialModel[]): Promise<PartialModel>[] {
            return partialModels.map(
                async (a) =>
                    await factory(PartialModel)()
                        .map(async (b) => {
                            b.name = a.name;
                            b.description = a.description;
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
                                                          d.maxValue = c.maxValue;
                                                          d.minValue = c.minValue;
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

        const maturityModels: MaturityModel[] = await factory(MaturityModel)()
            .map(async (a) => {
                a.partialModels = partialModels;
                return a;
            })
            .createMany(1);

        function resolveUserPartialModelsAcrossAllNestedLevels(
            partialModels: PartialModel[],
            // only applied to the top-level partialModels since
            // only top-level partialModels have a reference to the userMaturityModel
            userMaturityModel: UserMaturityModel | undefined,
        ): Promise<UserPartialModel>[] {
            return partialModels.map(
                async (a) =>
                    await factory(UserPartialModel)()
                        .map(async (b) => {
                            b.partialModel = a;
                            b.userMaturityModel = userMaturityModel
                                ? (userMaturityModel as UserMaturityModel)
                                : ({} as UserMaturityModel);
                            b.userEvaluationMetrics =
                                Array.isArray(a.evaluationMetrics) && a.evaluationMetrics.length
                                    ? await Promise.all(
                                          a.evaluationMetrics.map(
                                              async (c) =>
                                                  await factory(UserEvaluationMetric)()
                                                      .map(async (d) => {
                                                          d.valueEvaluationMetric = parseFloat(
                                                              (Math.random() * c.maxValue).toFixed(2),
                                                          );
                                                          d.evaluationMetric = c;
                                                          d.creator = admin.id.toString();
                                                          d.updater = admin.id.toString();
                                                          return d;
                                                      })
                                                      .create(),
                                          ),
                                      )
                                    : [];
                            b.subUserPartialModels =
                                Array.isArray(a.subPartialModels) && a.subPartialModels.length
                                    ? await Promise.all(
                                          resolveUserPartialModelsAcrossAllNestedLevels(a.subPartialModels, undefined),
                                      )
                                    : [];
                            b.creator = admin.id.toString();
                            b.updater = admin.id.toString();
                            return b;
                        })
                        .create(),
            );
        }
        const userPartialModels = await Promise.all(
            resolveUserPartialModelsAcrossAllNestedLevels(partialModels, userMaturityModels[0]),
        );
    }
}
