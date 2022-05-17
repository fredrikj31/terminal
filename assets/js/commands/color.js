class Color {

	terminal = null
	element = null;

	constructor(term) {
		this.terminal = term;
		this.element = document.getElementById("terminal");
	}

	setColor(color) {
		switch (color) {
			case "black":
				this.element.style.setProperty('--color', 'black');
				break;
			case "blue":
				this.element.style.setProperty('--color', 'blue');
				break;
			case "green":
				this.element.style.setProperty('--color', 'green');
				break;
			case "aqua":
				this.element.style.setProperty('--color', 'aqua');
				break;
			case "red":
				this.element.style.setProperty('--color', 'red');
				break;
			case "purple":
				this.element.style.setProperty('--color', 'purple');
				break;
			case "yellow":
				this.element.style.setProperty('--color', 'yellow');
				break;
			case "white":
				this.element.style.setProperty('--color', 'white');
				break;
			case "gray":
				this.element.style.setProperty('--color', 'gray');
				break;
			default:
				break;
		}
	}
}

export default Color;