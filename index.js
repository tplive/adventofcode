#!/usr/bin/env node

//TODO https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

const chalk = require("chalk");
const boxen = require("boxen");
const day1 = require("./1/1");

var greeting = chalk.white.bold("Results for Day 1:\n");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
greeting += day1.day1();
console.log(boxen( greeting, boxenOptions ));


