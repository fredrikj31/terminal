class Portfolio {
	terminal = null;

	projects = null;

	constructor(term) {
		this.terminal = term;
		this.init();
	}

	init = () => {
		this.fetchProjects().then((result) => {
			console.log(result);
		});
	}

	fetchProjects = async () => {
		return await fetch("./assets/data/projects.json")
		.then(response => response.json())
	}

	list = () => {
		this.fetchProjects().then((result) => {
			this.terminal.echo("--------------- Projects ---------------");
			for (let index = 0; index < result.length; index++) {
				this.terminal.echo(`${index + 1}. ${result[index]["name"]}`);
				this.terminal.echo(` - ${result[index]["description"]}`);
			}
			this.terminal.echo("--------------- Projects ---------------");
		});
	}

	show = (arg) => {
		let found = false;
		this.fetchProjects().then((result) => {
			for (let index = 0; index < result.length; index++) {
				if (result[index]["name"].toLowerCase() === arg.toLowerCase()) {
					this.displayProject(result[index]);
					found = true;
					break;
				} else {
					continue;
				}
			}

			if (found === false) {
				this.terminal.echo("There is no project named that. To see a list of the projects, type \"list\".")
			}
		});
	}

	displayProject = (data) => {
		console.log(data);
	}
}

export default Portfolio;