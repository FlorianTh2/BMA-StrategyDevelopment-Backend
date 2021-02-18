import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../entities/project";
import { PartialModel } from "../entities/partialModel";
import { EvaluationMetric } from "../entities/evaluationMetric";
import { UserPartialModel } from "../entities/userPartialModel";

define(UserPartialModel, (faker: typeof Faker) => {
    let userPartialModel = new UserPartialModel();
    return userPartialModel;
});
