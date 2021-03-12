import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../../database/entities/project";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { MaturityModel } from "../../database/entities/maturityModel";
import { SYSTEM } from "../../constants";

define(MaturityModel, (faker: typeof Faker) => {
    let mm = new MaturityModel();
    mm.name = "Knape 2021";
    mm.creator = SYSTEM;
    mm.updater = SYSTEM;
    mm.version = 1;
    mm.language = "deutsch";
    return mm;
});
