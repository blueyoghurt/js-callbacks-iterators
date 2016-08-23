var people = ['Bob', 'Jen', 'James', 'Isolde'];


// var xsa = people[2].toUpperCase();
// console.log(xsa);

// Your code here!

// Write some code using map that takes the above array of objects, and turns the array elements to all caps

// var newPeople = people.map(function(){
//   var nPeople = {};
//   nPeople[index] = people[index].toUpperCase();
//   return nPeople;
// });
//
// console.log(newPeople);

var newPeople = people.map(toUpperCase);

// console.log(nPeople);

// ex:
// console.log(people);
// > [ 'BOB', 'JEN', 'JAMES', 'ISOLDE' ]
