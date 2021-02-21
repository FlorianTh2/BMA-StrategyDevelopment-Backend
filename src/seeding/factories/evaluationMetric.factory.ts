import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../../database/entities/project";
import { PartialModel } from "../../database/entities/partialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";

define(EvaluationMetric, (faker: typeof Faker) => {
    let evaluationMetric = new EvaluationMetric();
    evaluationMetric.description = faker.random.words();
    return evaluationMetric;
});
