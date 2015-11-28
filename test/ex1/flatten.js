"use strict";

import flatten from "../../src/ex1/flatten.js";
import assert from "assert";

describe('Flatten Array', function() {
	it('should return an empty array when no array provided', function () {
	  assert.deepEqual([], flatten());
	  assert.deepEqual([], flatten("test_with_a_string"));
	  assert.deepEqual([], flatten(1));
	});
	it('should return an empty array when empty array provided', function () {
	  assert.deepEqual([], flatten([]));
	});
	it('should flatten a multi-level nested array', function () {
	  assert.deepEqual([1,-2,3,9,3,4,2,-12,32,4,21,22,-23,24,25], flatten([[1,-2,[3,9,3,4,[[2,-12,32]]],4,[21,[22,[-23,24,25]]]]]));
	});
	it('should ignore empty value', function () {
	  assert.deepEqual([1,2,3,4], flatten([[1,2,[3,[]]],4]));
	});
	it('should ignore non integer value', function () {
	  assert.deepEqual([1,4], flatten([[1,2.2,["non integer value"]],4]));
	});
});