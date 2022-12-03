let keyArray = [];
let valueArray = [];
let ourMap = new Map();

ourMap.set('3.14', ';P');
ourMap.set(20, 'twenty');
ourMap.set(false, 'ten');
ourMap.set('true', 24);

for (let key of ourMap.keys()){
  keyArray.push(key);
}

for (let value of ourMap.values()){
  valueArray.push(value);
}

for (let i = 0; i < ourMap.size; i++){
  console.log(`Ключ - ${keyArray[i]}, значение - ${valueArray[i]}`);
}