const { readFileSync } = require("fs");

export const schema = readFileSync("./src/schema/schema.graphql").toString("utf-8");
