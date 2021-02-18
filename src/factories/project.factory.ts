import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Project } from "../entities/project";

define(Project, (faker: typeof Faker) => {
    let project = new Project();
    project.name = faker.random.word();
    project.description = faker.random.words();
    return project;
});
