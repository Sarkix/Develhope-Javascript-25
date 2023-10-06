let numberStore = [0, 1, 2];
let newNumber = 3;
// numberStore.push(newNumber);
// console.log(numberStore);

let combinedArray = [...numberStore, newNumber];
numberStore = combinedArray;
console.log(numberStore);
