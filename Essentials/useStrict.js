// Avoid use strict globaly, if you’re concatenating many files, all of them are placed into strict mode

// bad
 "use strict";

(function() {

	// good
	"use strict";


	function sum(x,y) {

		var value;

		// Variables typos can be found with "use strict"
		vallue = x + y;
		return value;
	};

	console.log(sum(1,1));

})();
