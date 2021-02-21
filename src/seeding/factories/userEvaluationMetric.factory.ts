import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../../database/entities/project";
import { PartialModel } from "../../database/entities/partialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";
import { UserEvaluationMetric } from "../../database/entities/userEvaluationMetric";

define(UserEvaluationMetric, (faker: typeof Faker) => {
    let userEvaluationMetric = new UserEvaluationMetric();
    userEvaluationMetric.valueEvaluationMetric = Math.random() * 4;
    return userEvaluationMetric;
});
