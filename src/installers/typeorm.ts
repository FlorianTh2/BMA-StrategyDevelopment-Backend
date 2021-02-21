import { createConnection } from "typeorm";
import { ConnectionOptions } from "typeorm";
import { User } from "../database/entities/user";

export async function install_typeorm() {
    // npm run typeorm migration:generate -- -n migrationName
    // npm run typeorm migration:run
    createConnection()
        .then((connection) => {
            let userAdmin1 = new User();
            userAdmin1.email = "test@test.com";
            userAdmin1.password = "test123";
            userAdmin1.firstname = "testFirstname";
            userAdmin1.lastname = "testLastname";

            let userRepository = connection.getRepository(User);

            // userRepository
            //     .save(userAdmin1)
            //     .then((project) => console.log("Post has been saved: ", project))
            //     .catch((error) => console.log("Cannot save. Error: ", error));
        })
        .catch((error) => console.log(error));
}
