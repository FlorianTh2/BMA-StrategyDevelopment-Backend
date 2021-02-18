import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../entities/project";
import { PartialModel } from "../entities/partialModel";

define(PartialModel, (faker: typeof Faker) => {
    let partialModel = new PartialModel();
    partialModel.description = faker.random.words();
    return partialModel;
});
