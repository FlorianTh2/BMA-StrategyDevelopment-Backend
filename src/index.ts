import "reflect-metadata";
import "dotenv/config";
import { install_packages } from "./installers/index";
import express, { Express } from "express";

// npm run typeorm migration:generate -- -n "database init"
// npm run typeorm migration:run
async function main() {
    const app: Express = express();

    await install_packages(app);

    let port = parseInt(process.env.PORT || "");
    if (isNaN(port) || port === 0) {
        port = 4000;
    }

    app.listen(port, () => {
        console.log("Server started at port " + port);
    });
}

main().catch((err) => {
    console.log(err);
});
