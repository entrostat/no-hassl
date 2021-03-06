import * as yargs from 'yargs';

interface CommandDescription {
    command: string;
    description: string;
    options: {
        key: string,
        details: yargs.Options
    }[];
}

export abstract class Command {
    abstract commandDescription: CommandDescription;

    abstract async run(args: yargs.Arguments): Promise<any>;

    registerOnMenu(args: yargs.Argv) {
        args.command(this.commandDescription.command, this.commandDescription.description, (menu) => {
            this.commandDescription.options.forEach(option => {
                menu.option(option.key, option.details);
            });
            return menu;
        }, this.run.bind(this));
    }

    sortAlphabetically(otherCommand: Command): -1|0|1 {
        if (otherCommand.commandDescription.command === this.commandDescription.command) {
            return 0;
        }
        return otherCommand.commandDescription.command > this.commandDescription.command ? -1 : 1;
    }
}