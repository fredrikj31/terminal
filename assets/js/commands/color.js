class Color {

	terminal = null
	element = null;

	constructor(term) {
		this.terminal = term;
		this.element = document.getElementById("terminal");
	}

	setColor(color) {
		if (color === undefined) {
			this.errorMessage()
			return;
		}
		switch (color.toLowerCase()) {
			case "red":
				this.element.style.setProperty('--color', 'red');
				break;
			case "green":
				this.element.style.setProperty('--color', 'green');
				break;
			case "blue":
				this.element.style.setProperty('--color', 'blue');
				break;
			case "yellow":
				this.element.style.setProperty('--color', 'yellow');
				break;
			case "white":
				this.element.style.setProperty('--color', 'white');
				break;
			default:
				this.errorMessage();
				break;
		}
	}

	errorMessage() {
		this.terminal.echo("An invalid color was giving! \n\nPlease enter a valid color: \n - Red \n - Green \n - Blue \n - Yellow \n - White");
	}
}

export default Color;