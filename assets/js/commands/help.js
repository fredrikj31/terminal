class Help {

	terminal = null;
	commandsPerPage = 5;

	commands = null;

	constructor(term) {
		this.terminal = term;
		this.init();
	}

	init = () => {
		this.fetchCommands().then((result) => {
			this.commands = result;
		});
	}

	fetchCommands = async () => {
		return await fetch("./assets/data/commands.json")
		.then(response => response.json())
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

		let pages = 0;
		// Calculating total number of page
		if (this.commands.length % this.commandsPerPage > 0) {
			pages = Math.round(this.commands.length / this.commandsPerPage) + 1;
		} else {
			pages = (this.commands.length / this.commandsPerPage);
		}

		if (page === 1) {
			this.terminal.echo("------------ Commands ------------");
			for (let index = 0; index < this.commandsPerPage; index++) {
				this.printCommand(this.commands[index]["Command"], this.commands[index]["Description"]);			
			}
			this.terminal.echo(`---------- Page ${page} of ${pages}  ----------`);
			this.terminal.echo("\n");
		} else {
			let total = 0;
			if (page * this.commandsPerPage > this.commands.length) {
				total = this.commands.length;
			} else {
				total = page * this.commandsPerPage;
			}

			this.terminal.echo("------------ Commands ------------");
			for (let index = ((page - 1) * this.commandsPerPage); index < total; index++) {
				this.printCommand(this.commands[index]["Command"], this.commands[index]["Description"]);
			}
			this.terminal.echo(`---------- Page ${page} of ${pages}  ----------`);
			this.terminal.echo("\n");
		}
	}

	printCommand(command, description) {
		this.terminal.echo(`${command} - ${description}`);
	}
}

export default Help;