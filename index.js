#!/usr/bin/env node

//TODO https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

const chalk = require("chalk");
const boxen = require("boxen");
const day1 = require("./1/1");

const greeting = chalk.white.bold("Results for Day 1");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
console.log(boxen( greeting, boxenOptions ));
console.log(boxen( day1.day1(), boxenOptions ));

