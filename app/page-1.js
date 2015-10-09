var frameModule = require("ui/frame");
var gesturesModule = require("ui/gestures");

exports.loaded = function(args) {
	var page = args.object;
	page.on(gesturesModule.GestureTypes.swipe, function(args) {
		if (args.direction == gesturesModule.SwipeDirection.left) {
			frameModule.topmost().navigate("page-2");
		}
	});
};