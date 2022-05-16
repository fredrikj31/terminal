function exit(term) {

	term.echo("Closing the window in 5 seconds...");
	term.pause();

	setTimeout(() => { window.close() }, 5000);
}

export { exit };