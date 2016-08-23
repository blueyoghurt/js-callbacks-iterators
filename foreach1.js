/*
	For Each:
	Use the .forEach iterator to loop over the following array of foods and say you like them.
 */

var foods = ["pizza", "tacos", "ice cream"];

// your code here
function myFunction(item) {
  console.log("I like", item);
}

foods.forEach(myFunction);

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
