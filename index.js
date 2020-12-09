#!/usr/bin/env node

//TODO https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

const chalk = require("chalk");
const boxen = require("boxen");
const day1 = require("./1/1");
const day2 = require("./2/2");



const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};

var d1 = chalk.white.bold("Results for Day 1:\n");
d1 += day1.day1();
console.log(boxen( d1, boxenOptions ));

var d2 = chalk.white.bold("Results for Day 2:\n");
d2 += day2.day2();
console.log(boxen( d2, boxenOptions ));

