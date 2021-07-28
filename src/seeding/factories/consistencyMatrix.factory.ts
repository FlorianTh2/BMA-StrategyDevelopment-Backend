import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../../database/entities/project";
import { PartialModel } from "../../database/entities/partialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";
import { ConsistencyMatrix } from "../../database/entities/consistencyMatrix";

define(ConsistencyMatrix, (faker: typeof Faker) => {
    let consistencyMatrix = new ConsistencyMatrix();
    consistencyMatrix.description = faker.random.words();
    return consistencyMatrix;
});
