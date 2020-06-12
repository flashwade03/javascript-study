const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

function greet() {
  return `Hello, I'm ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation){
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.apply(bruce, [1955, "actor"])
update.apply(madeline, [1918, "writer"])
console.log(bruce);
console.log(madeline);

const arr = [2,3,-5,15,7];
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce)
console.log(bruce);
console.log(Math.min(...arr));

const updateBruce = update.bind(bruce);
updateBruce(1914, "actor");
console.log(bruce);
console.log(madeline);
updateBruce.call(madeline, "1274", "king");
console.log(madeline);
update.call(madeline, "1274", "king");
console.log(madeline);
const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
console.log(bruce);
updateBruce1949(1999, "actor")
console.log(bruce);
