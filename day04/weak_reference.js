const SecretHolder = (function() {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this, secret);
    }

    getSecret() {
      return secrets.get(this);
    }
  }
})();

const a = new SecretHolder();
const b = new SecretHolder();
//a.setSecret('secret A');
//console.log(a.getSecret());
console.log(typeof(a));
console.log(SecretHolder);

const naughty = new WeakSet();

const children = [
  {name: "Suzy"},
  {name: "Derek"},
];

naughty.add(children[1]);
for (let child of children) {
  if (naughty.has(child)) {
    console.log(`Coal for ${child.name}!`);
  } else{
    console.log(`Presents for ${child.name}!`);
  }
}
