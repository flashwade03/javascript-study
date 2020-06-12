const u1 = {name: 'Cynthia'};
const u2 = {name: 'Jackson'};
const u3 = {name: 'Olive'};
const u4 = {name: 'James'};

//const userRoles = new Map();
/*
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

userRoles
  .set(u1, 'User')
  .set(u2, 'User')
  .set(u3, 'Admin')
*/

const userRoles = new Map([
  [u1, 'User'],
  [u2, 'User'],
  [u3, 'Admin']
]);

console.log(userRoles.get(u2));
console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));

console.log(userRoles.get(u1));
console.log(userRoles.set(u1, 'Admin'));
console.log(userRoles.get(u1));
console.log(userRoles.size);

for (let u of userRoles.keys()) {
  console.log(u.name);
}

for (let r of userRoles.values()) {
  console.log(r);
}

for (let ur of userRoles.entries()) {
  console.log(`${ur[0].name}: ${ur[1]}`);
}

for (let [u, r] of userRoles.entries()) {
  console.log(`${u.name}: ${r}`);
}

for (let [u, r] of userRoles) {
  console.log(`${u.name}: ${r}`);
}

console.log([...userRoles.values()]);

userRoles.delete(u2);
console.log(userRoles.size);

userRoles.clear();
console.log(userRoles.size);
