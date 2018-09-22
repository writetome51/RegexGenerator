"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegexGenerator_1 = require("./RegexGenerator");
var rxG = new RegexGenerator_1.RegexGenerator({ caseSensitive: false, multiline: false, global: true });
var regexp = rxG.alphanumericAll().forMinimum(3)
    .beginSubpattern().anyOfTheseChars('_-').zeroOrOne().endSubpattern()
    .beginSubpattern().alphanumericAll().forMinimum(1).zeroOrOne().endSubpattern()
    .exact('@').alphanumericAll().inRange([1, 30])
    .exact('\\.').alphaLower().inRange([2, 10])
    .generate();
console.log(regexp);
var str = 'his address is dochoover@gmail.com,' +
    'her address is sarahb100@yahoo.com, and the others dont have one.' +
    'Johns address is smoov_40@outlook.photo, and katie\'s is 100Girls_night@fosters.edu';
var matches = str.match(regexp);
console.log(matches);
