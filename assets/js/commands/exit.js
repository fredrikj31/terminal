class Exit {
	
	terminal = null;
	cancelExit = false;

	constructor(term) {
		this.terminal = term;
	}

	exit() {
		this.terminal.echo("Closing the window in 5 seconds...");
		this.terminal.pause();

		setTimeout(() => { 
			if (this.cancelExit == true) {
				window.close();
				this.cancelExit = false;
				return;
			} else {
				this.cancelExit = false;
				return;
			}
		}, 5000);
	}

	cancelExit() {
		if (this.cancelExit == false) {
			this.cancelExit = true;
			return;
		} else {
			return;
		}
	}
}

export { Exit };