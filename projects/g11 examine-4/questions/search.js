console.log("-------SEARCH------");

/**
 * @param {string[]} words
 * @param {string} searchWord
 * @return {string[][]}
 */
function search(words, searchWord) {
  if (searchWord === '' || words.length === 0) return [];

  let output = [];
  let currentMatch = '';
 
  for (let i = 0; i < searchWord.length; i++) {
      currentMatch += searchWord[i];
 
      let Result = [];
 
      for (let j = 0; j < words.length; j++) {
          let currentWord = words[j];
          if (currentWord.startsWith(currentMatch)) {
              Result.push(currentWord);
          }
      }
      output.push(Result);
  }
  return output;
} // mouse

console.log(search(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"));
/**
 * [
 *  ["mobile","mouse","moneypot"], // m
 *  ["mobile","mouse","moneypot"], // mo
 *  ["mouse","mousepad"], // mou
 *  ["mouse","mousepad"], // mous
 *  ["mouse","mousepad"] // mouse
 * ]
 */

console.log(search(["pdp-a-15", "pdp-g-7", "pdp-g-8","pdp-b-7", "pdp-b-11"], "pdp-b-7"));
/**
 *  [
 *   ["pdp-a-15", "pdp-g-7", "pdp-g-8"], // p
 *   ["pdp-a-15", "pdp-g-7", "pdp-g-8"], // pd
 *   ["pdp-a-15", "pdp-g-7", "pdp-g-8"], // pdp
 *   ["pdp-a-15", "pdp-g-7", "pdp-g-8"], // pdp-
 *   ["pdp-b-7","pdp-b-11"], // pdp-b
 *   ["pdp-b-7","pdp-b-11"], // pdp-b-
 *   ["pdp-b-7"], // pdp-b-7
 *  ]
 *
 */

console.log(search(["arslon"], "arslon"));
/**
 *  [
 *   ["arslon"], // a
 *   ["arslon"], // ar
 *   ["arslon"], // ars
 *   ["arslon"], // arsl
 *   ["arslon"], // arslo
 *   ["arslon"], // arslon
 *  ]
 *
 */

console.log(search(["pdp"], "")); // []
console.log(search([], "pdp")); // []
