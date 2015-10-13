var frameModule = require("ui/frame");
var gesturesModule = require("ui/gestures");
var pageModule = require("ui/page");
var labelModule = require("ui/label");

exports.loaded = function(args) {
	var page = args.object;
	page.on(gesturesModule.GestureTypes.swipe, function(args) {
		if (args.direction == gesturesModule.SwipeDirection.left) {
			frameModule.topmost().navigate({
				create: function() {
					var newPage = new pageModule.Page();
					var label = new labelModule.Label();
					label.text = "page 2";
					newPage.content = label;
					return newPage;
				}
			});
		}
	});
};