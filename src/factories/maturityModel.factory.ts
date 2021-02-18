import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../entities/project";
import { MaturityModel } from "../entities/maturityModel";

define(MaturityModel, (faker: typeof Faker) => {
    let mm = new MaturityModel();
    mm.name = faker.random.word() + "MaturityModel";
    return mm;
});
