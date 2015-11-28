"use strict";

import fs from "fs";
import { jsonify, insertionSort } from "./utils.js";
import getGreatCircleDistance from "./greatcircledistance.js";

export default class Party {
	/**
	* @return {Number} radius : Maximal distance in km to send invitation
	* @param {Number} lon, lat : GPS coordinates of party
	* @param {String} path: Path to list of potentially invited customers file
	*/
  constructor(radius, lat, lon, path) {
		this.path = path;
		this.radius = radius;
		this.lat = lat;
    this.lon = lon;
  }
  get customers() {
    try {
      return JSON.parse(jsonify(fs.readFileSync(this.path, "utf8")));
		}
		catch (e) {
			throw e;
		}
  }
  get invited() {
    let self = this;
    return insertionSort(self.customers.filter(function(customer) {
      return (getGreatCircleDistance(customer.latitude, customer.longitude, self.lat, self.lon) < self.radius) ? true : false; 
    }),"user_id");
  }
  display() {
    this.invited.forEach(function(customer) {
      console.log(customer.user_id + ": " + customer.name);
    });
  }
}