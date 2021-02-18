import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../entities/project";
import { PartialModel } from "../entities/partialModel";
import { EvaluationMetric } from "../entities/evaluationMetric";
import { UserEvaluationMetric } from "../entities/userEvaluationMetric";

define(UserEvaluationMetric, (faker: typeof Faker) => {
    let userEvaluationMetric = new UserEvaluationMetric();
    userEvaluationMetric.valueEvaluationMetric = Math.random() * 4;
    return userEvaluationMetric;
});
