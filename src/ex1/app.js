"use strict";

import flatten from "./flatten.js";

process.on("uncaughtException", function (err) {
	console.error(err.toString());
});

const array = JSON.parse(process.argv[2]) || [1,2,[3,4,[5]],6,7];
console.log("Following array: \n", array, "\nflattened into: \n", flatten(array));
