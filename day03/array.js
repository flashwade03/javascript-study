const arr = [{id:5, name:'Judith'}, {id:7, name:'Francis'}];
console.log(arr.findIndex(o => o.id === 5));
console.log(arr.findIndex(o => o.name === "Francis"));
console.log(arr.findIndex(o => o === 3));
console.log(arr.findIndex(o => o.id === 17));
console.log(arr.find(o => o.id === 5));
console.log(arr.find(o => o.id === 2));

const arr2 = [1,17,16,5,4,16,10,3,49];
console.log(arr2.find((x, i) => i>2 && Number.isInteger(Math.sqrt(x))));
