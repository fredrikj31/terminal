class Portfolio {
	terminal = null;

	projects = null;

	constructor(term) {
		this.terminal = term;
		this.init();
	}

	init = () => {
		this.fetchProjects().then((result) => {
			this.projects = result;
		});
	}

	fetchProjects = async () => {
		return await fetch("./assets/data/projects.json")
			.then(response => response.json())
	}

	list = () => {
		this.terminal.echo("--------------- Projects ---------------");
		for (let index = 0; index < this.projects.length; index++) {
			this.terminal.echo(`${index + 1}. ${this.projects[index]["name"]}`);
			this.terminal.echo(` - ${this.projects[index]["description"]}`);
		}
		this.terminal.echo("--------------- Projects ---------------\n");
	}

	show = (arg) => {
		if (arg === undefined) {
			this.terminal.echo("Please enter a valid project name. To see a list of the projects, type \"list\".")
			return;
		}

		let found = false;
		for (let index = 0; index < this.projects.length; index++) {
			if (this.projects[index]["name"].toLowerCase() === arg.toLowerCase()) {
				this.displayProject(this.projects[index]);
				found = true;
				break;
			} else {
				continue;
			}
		}

		if (found === false) {
			this.terminal.echo("There is no project named that. To see a list of the projects, type \"list\".")
		}
	}

	displayProject = (data) => {
		this.terminal.echo(`-------------------- ${data["name"]} --------------------`);

		this.terminal.echo(data["description"]);

		this.terminal.echo("\nTech Stack:");
		data["techStack"].forEach(element => {
			this.terminal.echo(` - ${element}`);
		});
		
		this.terminal.echo("\nDevelopment Technologies:");
		data["technologies"].forEach(element => {
			this.terminal.echo(` - ${element}`);
		});

		this.terminal.echo(`-------------------- ${data["name"]} --------------------\n`);
	}
}

export default Portfolio;