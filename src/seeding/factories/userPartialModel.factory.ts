import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../../database/entities/project";
import { PartialModel } from "../../database/entities/partialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";
import { UserPartialModel } from "../../database/entities/userPartialModel";

define(UserPartialModel, (faker: typeof Faker) => {
    let userPartialModel = new UserPartialModel();
    return userPartialModel;
});
