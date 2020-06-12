function* rainbow() {
  yield 'red';
  yield 'orange';
  yield 'yellow';
  yield 'green';
  yield 'blue';
  yield 'indigo';
  yield 'violet';
}

const it = rainbow()
for (let color of it) {
  console.log(color);
}

function* interrogate() {
  const name = yield "Waht is your name?";
  const color = yield "What is your favorite color?";
  return `${name}'s favorite color is ${color}.`;
}

const it2 = interrogate();
console.log(it2.next());
console.log(it2.next('Ethan'));
console.log(it2.next('orange'));
