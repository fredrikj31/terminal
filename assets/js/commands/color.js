class Color {

	terminal = null
	element = null;

	constructor(term) {
		this.terminal = term;
		this.element = document.getElementById("terminal");
	}

	setColor(color) {
		switch (color) {
			case "blue":
				this.element.style.setProperty('--color', 'blue');
				break;
			case "green":
				this.element.style.setProperty('--color', 'green');
				break;
			case "white":
				this.element.style.setProperty('--color', 'white');
				break;
			default:
				break;
		}
	}
}

export default Color;