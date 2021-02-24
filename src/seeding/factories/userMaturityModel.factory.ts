import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../../database/entities/project";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";

define(UserMaturityModel, (faker: typeof Faker) => {
    let mm = new UserMaturityModel();
    mm.name = faker.random.word() + "UserMaturityModel";
    return mm;
});
