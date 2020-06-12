const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])
  for(let value = 1; value <= 13; ++value)
    cards.push({suit, value});

console.log(cards);

const cards3 = cards.filter(c => c.value === 3);
console.log(cards3);

const cards_dia = cards.filter(c => c.suit === 'D');
console.log(cards_dia);

const cards_ab10 = cards.filter(c => c.value >10);
console.log(cards_ab10);

const cards_heart_ab10 = cards.filter(c => c.suit == 'H' && c.value > 10);
console.log(cards_heart_ab10);
