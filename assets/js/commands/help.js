class Help {

	terminal = null;

	constructor(term) {
		this.terminal = term;
	}

	help() {
		this.terminal.echo("-----");
		this.terminal.echo("Hej med dig");
		this.terminal.echo("-----");
	}

}

export default Help;