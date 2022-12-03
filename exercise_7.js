const myArray = [1, 1, 1, null, 1, 0];
let numsEven = 0;
let numsOdd = 0;
let numsNull = 0;

myArray.forEach(function(item, index, array){
  
if (typeof myArray[index] === 'number'){
  if (myArray[index] !== 0) {
    if (myArray[index] % 2 === 0){
      numsEven += 1;
    } else {
      numsOdd += 1;
    }
  } else {
    numsNull += 1;
  }
} else {
  console.log(`${myArray[index]} - это не число`)
}
  
});

console.log(`${numsEven} - количество четных элементов`);
console.log(`${numsOdd} - количество нечетных элементов`);
console.log(`${numsNull} - количество элементов равным 0`);
