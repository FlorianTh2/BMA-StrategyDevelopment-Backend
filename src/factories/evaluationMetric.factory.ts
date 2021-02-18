import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../entities/project";
import { PartialModel } from "../entities/partialModel";
import { EvaluationMetric } from "../entities/evaluationMetric";

define(EvaluationMetric, (faker: typeof Faker) => {
    let evaluationMetric = new EvaluationMetric();
    evaluationMetric.description = faker.random.words();
    return evaluationMetric;
});
