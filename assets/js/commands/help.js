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
			"Command": "heyo",
			"Description": "Shows this menu... :)"
		},
		{
			"Command": "hello",
			"Description": "Shows this menu... :)"
		},
		{
			"Command": "world",
			"Description": "Shows this menu... :)"
		},
	]

	constructor(term) {
		this.terminal = term;
	}

	help(page) {
		//console.log(page);
		if (page === undefined) {
			this.printCommands(1);
		} else {
			this.printCommands(page)
		}
	}

	printCommands(page) {
		if (page === 1) {
			for (let index = 0; index < this.commandsPerPage; index++) {
				console.log(this.commands[index]["Command"]);			
			}
		} else {
			let total = 0;
			if (page * this.commandsPerPage > this.commands.length) {
				total = this.commands.length;
			} else {
				total = page * this.commandsPerPage;
			}
			for (let index = ((page - 1) * this.commandsPerPage); index < total; index++) {
				console.log(this.commands[index]["Command"]);	
			}
		}
	}

	printCommand(command, description) {
		this.terminal.echo();
	}
}

export default Help;