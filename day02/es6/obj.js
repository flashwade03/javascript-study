const sam1 = {
  name: 'Sam',
  age: 4,
};

const sam2 = {name: 'Sam', age: 4};
const sam3 = {
  name: 'Sam',
  classification: {
    kingdom: 'Anamalia',
    phylum: 'Chordata',
    class: 'Malalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felinae',
    genus: 'Felis',
    species: 'catus',
  },
};

console.log(sam3.classification.family);
console.log(sam3['classification'].family);
console.log(sam3.classification['family']);
console.log(sam3['classification']['family']);

sam3.speak = function() {
  return 'Meow!';
};

sam3.speak();
