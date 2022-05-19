class Color {

	terminal = null
	element = null;

	colors = [
		{
			"color": "red",
			"code": "#FF0000",
		},
		{
			"color": "green",
			"code": "#00FF00",
		},
		{
			"color": "blue",
			"code": "#0000FF",
		},
		{
			"color": "yellow",
			"code": "#FFFF00",
		},
		{
			"color": "white",
			"code": "#FFFFFF",
		}
	];

	constructor(term) {
		this.terminal = term;
		this.element = document.getElementById("terminal");
	}

	setColor(color) {
		if (color === undefined) {
			this.errorMessage()
			return;
		}
		for (let index = 0; index < this.colors.length; index++) {
			if (this.colors[index]["color"] === color) {
				this.element.style.setProperty('--color', this.colors[index]["code"]);
			} else {
				continue;
			}
		}
	}

	errorMessage() {
		this.terminal.echo("An invalid color was giving! \n\nPlease enter a valid color: \n - Red \n - Green \n - Blue \n - Yellow \n - White");
	}
}

export default Color;