'use strict';

const sentences = [{
  subject: 'JavaScript',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large'
}];
/**
 * say function
 */

function say({
  subject,
  verb,
  object
}) {
  console.log(`${subject} ${verb} ${object}`);
}

for (const s of sentences) {
  say(s);
}