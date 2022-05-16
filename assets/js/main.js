import { echo } from "./commands/echo.js";
import { about } from "./commands/about.js";
import { exit } from "./commands/exit.js";
import { clear } from "./commands/clear.js";

$(function () {
	$("#terminal").terminal({
		// Register commands
		open: function (value) {
			var div = $("<p>Hello <strong>World</strong></p>")
			this.echo(div);
		},
		sub: {
			get: function (arg) {
			}
		},
		exit: function() {
			exit(this);
		},
		echo: function(arg) {
			echo(this, arg);
		},
		about: function(arg) {
			about(this, arg);
		},
		clear: function() {
			clear(this);
		}
	}, {
		greetings: false,
		name: "chowmean.github.io",
		prompt: "root@127.0.0.1: $ ",
		color: "green"
	});
});