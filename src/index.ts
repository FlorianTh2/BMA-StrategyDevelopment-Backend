import "reflect-metadata";
import "dotenv/config";

function main() {
    console.log("hello world");
    console.log(process.env.TEST_VARIABLE);
}

main();
