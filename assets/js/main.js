import Help from "./commands/help.js";
import Color from "./commands/color.js";
import Portfolio from "./commands/portfolio.js";
import { echo } from "./commands/echo.js";
import { about } from "./commands/about.js";
import { Exit } from "./commands/exit.js";
import { clear } from "./commands/clear.js";

const terminal = $("#terminal").terminal({
	// General Commands
	help: function(arg) {
		help.help(arg);
	},
	open: function (value) {
		var div = $("<p>Hello <strong>World</strong></p>")
		this.echo(div);
	},
	portfolio: {
		get: function (arg) {
			this.echo("Hej med dig");
		},
		list: function () {
			portfolio.list();
		},
		show: function (arg) {
			portfolio.show(arg);
		}
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
const exit = new Exit(terminal);
const color = new Color(terminal);
const help = new Help(terminal);
const portfolio = new Portfolio(terminal);