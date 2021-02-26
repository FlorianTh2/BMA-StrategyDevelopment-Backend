import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { User } from "../../database/entities/user";
import { generateSHA512Hash } from "../../utils/authorization/cryptography";

define(User, (faker: typeof Faker) => {
    let user = new User();
    return user;
});
