import { Command } from "./commands/Command.js";

import Help from "./commands/help.js";
import Color from "./commands/color.js";
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
	help: function(args) {
		this.echo(args);
		help.help();
	},
	exit: function() {
		exit.exit();
	},
	echo: function (arg) {
		echo(this, arg);
	},
	about: function (arg) {
		about(this, arg);
	},
	ls: function () {
		ls(this);
	},
	// Default commands
	clear: function () {
		clear(this);
	},
	color: function(arg) {
		console.log(arg);
		color.setColor(arg);
	}
}, {
	greetings: "Hello high-tech person! Welcome to my portfolio. \nTo see all commands, type \"help\" in the terminal.\n",
	prompt: "root@127.0.0.1: $ ",
	color: "green",
	checkArity: false,
	keymap: {
		'CTRL+Q': function (e, original) {
			window.close();
		}
	}
});

// Functions
const cmd = new Command(terminal);
const exit = new Exit(cmd.terminal);
const color = new Color(cmd.terminal);
const help = new Help(cmd.terminal);
