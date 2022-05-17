import { Command } from "./commands/Command.js";

import { echo } from "./commands/echo.js";
import { about } from "./commands/about.js";
import { Exit } from "./commands/exit.js";
import { clear } from "./commands/clear.js";

const terminal = $("#terminal").terminal({
	// Register commands
	open: function (value) {
		var div = $("<p>Hello <strong>World</strong></p>")
		this.echo(div);
	},
	sub: {
		get: function (arg) {
			this.echo("Hej med dig");
		}
	},
	exit: function () {
		exit.exit();
	},
	echo: function (arg) {
		echo(this, arg);
	},
	about: function (arg) {
		about(this, arg);
	},
	clear: function () {
		clear(this);
	},
	ls: function () {
		ls(this);
	}
}, {
	greetings: false,
	name: "chowmean.github.io",
	prompt: "root@127.0.0.1: $ ",
	color: "green",
	keymap: {
		'CTRL+Q': function (e, original) {
			window.close();
		}
	}
});

// Functions
const cmd = new Command(terminal);
const exit = new Exit(cmd.terminal);

