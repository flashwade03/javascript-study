const f1 = function(){return "hello!";};

const f1_2 = () => "hello!";

const f2 = function(name){return `Hello, ${name}!`;};

const f2_2 = name => `Hello, ${name}!`;

const f3 = function(a,b) {return a+b;};

const f3_2 = (a,b) => a+b;

console.log(f1());
console.log(f1_2());
console.log(f2("hcjung"));
console.log(f2_2("hcjung"));
console.log(f3(1,2));
console.log(f3(1,2));

const o = {
  name: "Julie",
  greetBackWards: function() {
    const getReverseName = () => {
      let nameBackwards = "";
      for(let i = this.name.length-1; i>=0; --i) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  },
}

console.log(o.greetBackWards());
