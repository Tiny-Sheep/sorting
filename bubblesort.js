// function bubbleSort(array) {
//   // Compare adjacent neighbors and perform swap if necessary
//   // Repeat until stored
//
//   let swaps = -1;
//   let arrLength = array.length;
//   while (swaps !== 0) {
//     swaps = 0;
//     for (let i=0; i < arrLength-1; i++) {
//       if (arrLength > 1 && compareFn(array[i], array[i+1])) {
//         swapFn(array, i);
//         swaps++;
//       }
//     }
//     arrLength--;
//   }
//
//   return array;
// }




function bubbleSort(array) {
  // Compare adjacent neighbors and perform swap if necessary
  // Repeat until stored

  // base case
if(array.length === 1 || array.length === 0){
  return array
}
//recursive case
let swaps = 0
for (let i=0; i < array.length-1; i++) {

      if (compareFn(array[i], array[i+1])) {
        swapFn(array, i);
        swaps++

      }
    }
if(!swaps){
  return array
}

return bubbleSort(array.slice(0,-1)).concat(array[array.length-1])




}


function swapFn (array, currentIndex){
  let temp = array[currentIndex];
  array[currentIndex] = array[currentIndex + 1];
  array[currentIndex + 1] = temp;
}

function compareFn(num1, num2){
  return num2 < num1;
}
