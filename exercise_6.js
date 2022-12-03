const myArray = [1, 1, 1, 1, 1, 1];
let resemblance = 0;

// for (let i = 0; i < myArray.length; i++){
  
//   if (myArray[i] === myArray[0]){
//     resemblance = resemblance + 1;
//   } 
  
// }

myArray.forEach(function(item, index, array){
  
  if (myArray[index] === myArray[0]){
    resemblance += 1;
  } 
  
})

if (resemblance === myArray.length){
  console.log('true');
} else {
  console.log('false');
}