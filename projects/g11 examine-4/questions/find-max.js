console.log("-------FIND MAX------");




function findMax(list) {
  // if (!Array.isArray(list)) {
  //   throw new Error("Input must be an array.");
  // }

  let max = 0;
  for (const current of list) {
    if (!isNaN(current)) {
      const num = parseInt(current);
      max = Math.max(max, num);
    } else {
      const len = current.length;
      max = Math.max(max, len);
    }
  }

  return max;
}
console.log(findMax(["alic3", "bob", "3", "4", "00000"]) === 5);
console.log(findMax(["bobur", "22", "15", "arslonbek good boy"]) === 22);
console.log(findMax(["pdp", "pdp22", "14"]) === 14);
console.log(findMax(["03", "02", "pdp8"]) === 4);
console.log(findMax(["abc", "cccc", "6"]) === 6);
console.log(findMax(["abc", "bbb", "cccc"]) === 4);
console.log(findMax(["0000", "01", "10"]) === 10);
