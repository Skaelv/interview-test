"use strict";

import assert from "assert";
import getGreatCircleDistance from "../../src/ex2/greatcircledistance.js";

describe('Distance between GPS points', function() {
	it('should return 0 if trying to calculate distance between a point and himself', function () {
		assert.equal(0, getGreatCircleDistance(53.3381985, -6.2592576, 53.3381985, -6.2592576));
	});
	it('should calculate distance between two coordinates', function () {
		//Distance Dublin - Lyon
		assert.equal(1160.6870532875087, getGreatCircleDistance(53.3381985, -6.2592576, 45.780189, 4.8654808));
		//Wide of Russia
		assert.equal(6335.921387815633, getGreatCircleDistance(66.027579, -169.945173, 56.280824, 28.336076));
		//Distance 1st Customer - Company
		assert.equal(41.72352683717035, getGreatCircleDistance(53.3381985, -6.2592576, 52.986375, -6.043701));
		
	});
});