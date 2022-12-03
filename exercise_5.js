const myArray = [1, 3, 3, 40, 2, 99];

console.log(`${myArray.length} - количество элементов массива`);

let result = myArray.map(function(item, index, array) {
    
  return console.log(myArray[index]);
  
})