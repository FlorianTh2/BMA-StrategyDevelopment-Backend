import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../../database/entities/project";
import { PartialModel } from "../../database/entities/partialModel";

define(PartialModel, (faker: typeof Faker) => {
    let partialModel = new PartialModel();
    return partialModel;
});
