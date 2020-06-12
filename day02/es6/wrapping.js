const numStr = "33.3";
const num = Number(numStr);

const a = parseInt("16 volts", 10);
const b = parseInt("3a", 16);
const c = parseInt("15.5 kph");

console.log(a);
console.log(b);
console.log(c);

const d = new Date();
const ts = d.valueOf();
console.log(ts);

const e = true;
const f = e ? 1 : 0;
console.log(f);

const g = 33.5;
const h = g.toString();
console.log(h);

const arr = [1, true, "hello"];
console.log(arr);
console.log(arr.toString());

const i = 0;
const j = !!i;
const k = Boolean(i);
console.log(i);
console.log(j);
console.log(k);
