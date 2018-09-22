import {RegexGenerator} from './RegexGenerator';


let rxG = new RegexGenerator({caseSensitive: false, multiline: false, global: true});

let regexp = rxG.alphanumericAll().forMinimum(3)
    .beginSubpattern().anyOfTheseChars('_-').zeroOrOne().endSubpattern()
    .beginSubpattern().alphanumericAll().forMinimum(1).zeroOrOne().endSubpattern()
    .exact('@').alphanumericAll().inRange([1, 30])
    .exact('\\.').alphaLower().inRange([2, 10])
    .generate();

console.log(regexp);

let str = 'his address is dochoover@gmail.com,' +
    'her address is sarahb100@yahoo.com, and the others dont have one.' +
    'Johns address is smoov_40@outlook.photo, and katie\'s is 100Girls_night@fosters.edu';

let matches = str.match(regexp);
console.log(matches);
