import "reflect-metadata";
import "dotenv/config";
import { install_packages } from "./installers/index";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server";

// npm run typeorm migration:generate -- -n "database init"
// npm run typeorm migration:run
async function main() {
    let app: ApolloServer = await install_packages();

    let port = parseInt(process.env.PORT || "");
    if (isNaN(port) || port === 0) {
        port = 80;
    }

    app.listen(port, () => {
        console.log("Server started at port " + port);
    });
}

main().catch((err) => {
    console.log(err);
});
