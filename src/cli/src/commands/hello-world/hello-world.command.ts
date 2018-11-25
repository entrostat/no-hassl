import {Command} from "../command";
import * as yargs from "yargs";

export class HelloWorldCommand extends Command {
    commandDescription = {
        command: 'hello',
        description: 'Prints "hello world" to the terminal',
        options: [
            {
                key: 'times',
                details: {
                    alias: 'n',
                    describe: 'The number of times it should print to the screen.',
                    number: true,
                    default: 1
                }
            }
        ]
    };

    async run(args: yargs.Arguments): Promise<void> {
        const times = args.times;
        for (let i = 0; i < times; i++) {
            console.log('Hello World!');
        }
        return;
    }
}