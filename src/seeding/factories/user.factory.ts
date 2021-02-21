import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { User } from "../../database/entities/user";

define(User, (faker: typeof Faker) => {
    let userAdmin1 = new User();
    userAdmin1.email = faker.internet.email();
    userAdmin1.password = "test123";
    userAdmin1.firstname = faker.name.firstName();
    userAdmin1.lastname = faker.name.lastName();
    return userAdmin1;
});
