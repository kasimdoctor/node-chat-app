// Unix epic January 1 1970 00:00:00

const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'y').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// challenge
// var date = moment();
// console.log(date.format('LT'));

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('LT'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);