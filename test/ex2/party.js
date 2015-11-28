"use strict";

import Party from "../../src/ex2/party.js";
import assert from "assert";

describe("Create a party", function() {
	it("should construct a party", function () {
		let party = new Party(100, 53.3381985, -6.2592576, "./customer.json");
		assert.equal(100, party.radius);
		assert.equal(53.3381985, party.lat);
		assert.equal(-6.2592576, party.lon);
		assert.equal("./customer.json", party.path);
	});
	describe("Reading customers file", function() {
		it("should read and format 'customer.json' to a customer list", function () {
			let party = new Party(100, 53.3381985, -6.2592576, "./customer.json");
			assert.equal(32, party.customers.length);
		});
		it("should throw an error when trying to read an unexisting file", function () {
			let party = new Party(100, 53.3381985, -6.2592576, "./noFile.json");
			assert.throws(() => {party.customers;}, /ENOENT/);
		});
		it("should throw a SyntaxError when trying to parse a malformed json file", function () {
			let party = new Party(100, 53.3381985, -6.2592576, "test/ex2/data/malformed.json");
			assert.throws(() => {party.customers;}, /SyntaxError/); 
		});
	});
	describe("Get Invited Customers", function() {
		it("should get invited customers list sorted", function () {
			let party = new Party(100, 53.3381985, -6.2592576, "./customer.json");
			assert.equal(16, party.invited.length);
			for (var i = 1; i < party.invited.length; i++) {
				assert(party.invited[i-1]["user_id"] < party.invited[i]["user_id"]); 
			}
		});
	});
});