function f(o){
  o.message = `f 안에서 수정함. (이전 값 : '${o.message}')`;
}

function f2(x) {
  console.log(`f 내부: x=${x}`);
  x = 5;
  console.log(`f 내부: x=${x} (할당 후)`);
}

function f3(o2) {
  o.message = "f3에서 수정함";
  o = {
    message: "새로운 객체!"
  };
  console.log(`f3 내부: o.message="${o.message}" (할당 후)`);
}

let o = {
  message:"초기값"
};

console.log(`f를 호출하기 전: o.message="${o.message}"`);
f(o);
console.log(`f를 호출한 다음: o.message="${o.message}"`);

let x = 3;
console.log(`f2를 호출하기 전: x=${x}`);
f2(x);
console.log(`f2를 호출한 다음: x=${x}`);

let o2 = {
  message:"초기값"
};

console.log(`f3을 호출하기 전: o.message="${o2.message}"`);
f3(o2);
console.log(`f3을 호출한 다음: o.message="${o2.message}"`);

function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}

const o3 = {
  subject: "I",
  verb: "love",
  object: 'JavaScript'
};

console.log(getSentence(o3));

function addPrefix(prefix, ...words) {
  const prefixedWords = [];
  for (let i = 0; i < words.length; ++i) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex"));

function f4(a, b = "default", c = 3) {
  return `${a} - ${b} - ${c}`;
}

console.log(f4(5,6,7));
console.log(f4(5,6));
console.log(f4(5));
console.log(f4());

/*
const o4 = {
  name: "Julie",
  greetBackWards: function(){
    function getReverseName(){
      let nameBackwards = "";
      for (let i = this.name.length-1; i >= 0; --i){
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  },
};

console.log(o4.greetBackWards());
*/

const o5 = {
  name: "Julie",
  greetBackwards: function(){
    const self = this;
    function getReverseName(){
      let nameBackwards = "";
      for (let i = self.name.length-1; i >= 0; --i) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym, olleH`;
  },
};

console.log(o5.greetBackwards());

const g = function f(stop) {
  if (stop){
    console.log('f stopped');
  } else{
    f(true);
  }
}

g(false)
