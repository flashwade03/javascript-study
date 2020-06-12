'use strict';

const sentences = [
  {subject: 'JavaScript', verb: 'is', object: 'great'},
  {subject: 'Elephants', verb: 'are', object: 'large'},
];

/**
 * say function
 */
function say({subject, verb, object}) {
  console.log(`${subject} ${verb} ${object}`);
}

for (const s of sentences) {
  say(s);
}

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);
console.log(`New in ES6: \` strings.`);
console.log("Vertical tab: \vstring")
console.log("Form feed: \fstring")

let currentTemp = 19.5
const message = `The current temperature is ${currentTemp}\u00b0C`;
console.log(message)

const multiline = "line1\n\
line2";
console.log(multiline)

const multiline2 = `line1
line2
line3`;
console.log(multiline2)
