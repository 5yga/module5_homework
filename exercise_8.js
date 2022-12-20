let ourMap = new Map();

ourMap.set('3.14', ';P');
ourMap.set(20, 'twenty');
ourMap.set(false, 'ten');
ourMap.set('true', 24);

for (let pair of ourMap) {
  // pair - это массив [key, values]
  console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}