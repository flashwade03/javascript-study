class Person{
  constructor(name){
    this.name = name;
    this.id = Person.nextId++;
  }
}

Person.nextId = 0;
const jamie = new Person("Jamie"),
  juliet = new Person("Juliet"),
  peter = new Person("Peter"),
  jay = new Person("Jay");

const arr = [jamie, juliet, peter, jay];

console.log(arr.find(p=>p.id === juliet.id));

console.log(arr.find(function(p){
  return p.id === this.id
}, juliet));

const arr2 = [4,6,16,36];
console.log(arr2.every(x=>x%2 === 0));
console.log(arr2.every(x=>Number.isInteger(Math.sqrt(x))));

const cart = [{name:"Widget", price:9.95}, {name:"Gadget", price:22.95}];
const names = cart.map(x=>x.name);
const prices = cart.map(x=>x.price);
console.log(names);
console.log(prices);
const discountPrices = prices.map(x=>x*0.8);
console.log(discountPrices);

const items = ["Widget", "Gadget"];
const merged_cart = items.map((x,i)=>({name:x, price:prices[i]}));
console.log(merged_cart);
