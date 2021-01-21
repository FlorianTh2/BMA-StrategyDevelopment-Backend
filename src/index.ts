import "reflect-metadata";
import "dotenv/config";
import * as loader from "./installers/index";

async function main() {
    loader.init("hi");
    const app = express();
}

main().catch((err) => {
    console.log(err);
});
