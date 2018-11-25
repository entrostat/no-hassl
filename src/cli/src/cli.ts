import {Command} from "./commands/command";
import yargs from 'yargs';
import {HelloWorldCommand} from "./commands/hello-world/hello-world.command";

export class Cli {

    private activeCommands: Command[] = [
        new HelloWorldCommand()
    ];

    constructor() {
        this.sortCommandsAlphabetically();
        this.generateMenu();
    }

    async run() {

    }

    private sortCommandsAlphabetically(): void {
        this.activeCommands = this.activeCommands
            .sort((a: Command, b: Command) => a.sortAlphabetically(b));
    }

    private generateMenu(): void {
        yargs.usage('$0 <cmd> [args]')
            .scriptName('nohassl');
        this.activeCommands.forEach(command => command.registerOnMenu(yargs));
        yargs.showHelpOnFail(true)
            .help()
            .argv;
    }

}