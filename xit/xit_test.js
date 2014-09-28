steal(
	'funcunit',
	function (S) {

	// this tests the assembly 
	module("xit", {
		setup : function () {
			S.open("//xit/index.html");
		}
	});

	test("welcome test", function () {
		equals(S("h1").text(), "Welcome to JavaScriptMVC!", "welcome text");
	});

});
