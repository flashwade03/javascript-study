const book = [
  "Twinkle, twinkle, littele bat!",
  "How i wonder what you're at!",
  "UP above the world you fly.",
  "Like a tea tray in the sky.",
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at",
]

const it = book.values();
console.log(it);
console.log(typeof(it));
let current = it.next();
while(!current.done) {
  console.log(current.value);
  current = it.next();
}

class Log{
  constructor() {
    this.messages = [];
  }

  add(message) {
    this.messages.push({message, timestamp: Date.now()});
  }

  [Symbol.iterator]() {
    let i = 0;
    const messages = this.messages;
    return {
      next() {
        if(i >= messages.length)
          return { value: undefined, done: true };
        return { value: messages[i++], done: false};
      }
    }
  }
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another level");

for (let entry of log) {
  console.log(`${entry.message} @ ${entry.timestamp}`);
}
