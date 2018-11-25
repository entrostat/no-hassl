import {Command} from "../command";

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
    }


}