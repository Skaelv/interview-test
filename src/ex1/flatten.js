"use strict";

export default function flatten(array) {
	let merged_array = [];
	if(array && array.constructor == Array) {
		for (let i = 0; i < array.length; i++) {
			if(array[i].constructor == Array) {
				merged_array = merged_array.concat(flatten(array[i]));
			} else if (Number.isInteger(array[i])) {
				merged_array.push(array[i]);
			}
		}
	}
	return merged_array;
}
