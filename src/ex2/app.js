"use strict";

import Party from "./party.js";

process.on("uncaughtException", function (err) {
	console.error(err.toString());
});


const RADIUS = process.argv[2] || 100;
const PATH = process.argv[3] || "./customer.json";
const LAT = process.argv[4] || 53.3381985;
const LON = process.argv[5] || -6.2592576;

let party = new Party(RADIUS, LAT, LON, PATH);
party.display();
