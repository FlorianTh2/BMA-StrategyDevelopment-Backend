import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { User } from "../../database/entities/user";
import { generateSHA512Hash } from "../../utils/authorization/cryptography";

define(User, (faker: typeof Faker) => {
    let userAdmin1 = new User();
    userAdmin1.email = faker.internet.email().toLocaleLowerCase();
    userAdmin1.password = generateSHA512Hash(process.env.SEED_PW as string);
    userAdmin1.firstname = faker.name.firstName();
    userAdmin1.lastname = faker.name.lastName();
    return userAdmin1;
});
