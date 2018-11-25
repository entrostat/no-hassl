import {Cli} from "./src/cli";

async function run() {
    const cli = new Cli();
    await cli.run();
}

run().then(done => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});