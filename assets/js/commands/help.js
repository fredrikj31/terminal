class Help {

	terminal = null;
	commandsPerPage = 5;

	commands = [
		{
			"Command": "help",
			"Description": "Shows this menu... :)"
		},
		{
			"Command": "clear",
			"Description": "Clears the terminal, so there is nothing left."
		},
		{
			"Command": "color",
			"Description": "Shows this menu... :)"
		},
		{
			"Command": "help",
			"Description": "Shows this menu... :)"
		},
	]

	constructor(term) {
		this.terminal = term;
	}

	help(page) {
		if (page === undefined) {
			this.printCommands(1);
		}
		this.terminal.echo("-----");
		this.terminal.echo("Hej med dig");
		this.terminal.echo("-----");
		this.printCommands();

		let pages = Math.floor(this.commands.length / this.commandsPerPage);
		if (page <= pages) {
			this.printCommands(page);
		}
	}

	printCommands(page) {
		for (let index = 0; index < page * this.commandsPerPage; index++) {
			console.log(this.commands[index]["Command"]);			
		}
	}
}

export default Help;