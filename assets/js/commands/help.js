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
		if (page === undefined) {
			this.printCommands(1);
		} else {
			this.printCommands(2)
		}

		let pages = Math.floor(this.commands.length / this.commandsPerPage);
		if (page <= pages) {
			this.printCommands(page);
		}
	}

	printCommands(page) {

		let total = page * this.commandsPerPage;
		if (total > this.commands.length) {
			total = this.commands.length;
		}

		for (let index = total; index < total; index++) {
			console.log(this.commands[index]["Command"]);			
		}
	}
}

export default Help;