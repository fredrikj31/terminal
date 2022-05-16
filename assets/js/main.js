$(function () {
	$('#terminal').terminal({
		// Register commands
		open: function (value) {
			var div = $('<p>Hello <strong>World</strong></p>')
			this.echo(div);
		},
		sub: {
			get: function (arg) {
			}
		},
		close: function (arg1, arg2) {
		},
		hello: function() {
			helloWorld(this);
		}
	}, {
		greetings: "Welcome to Python Service",
		keymap: {
			'CTRL+P': function (e, original) {
				this.echo('my shortcut');
			}
		}
	});
});