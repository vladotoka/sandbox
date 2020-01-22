const her = {
hair: "brown",
eys: "brown",
mind: "endless universe",
love: "infinity",
proceedSearchMe: true,
smile: function ( target, condition, place) {
	const mySelf = "us";
return function() {
if ( target === mySelf ) { 
proceedSearchMe = true; }
console.log( "My smile is always awesome"); } }
};


function SoftwareDeveloper() {
	this.favoriteLanguage = "JavaScript";
}
function Sandwich(bread, meat, vegetables) {
    this.bread = bread;
    this.meat = meat;
    this.vegetables = vegetables;
}
let cheeseburger = new Sandwich('rye', ['chicken', 'beef'], ['tomatoes', 'corn', 'halapenos']);
console.log(cheeseburger);    

//_______________________________________________________________
//
const numbers = [1, 5, 9, 3];
debugger;
function getMax (arr) {
  let max = -Infinity;
  arr.forEach(function (number) {
    max = Math.max(max, number);
  });
  return max;
}
    const max = getMax(numbers);
console.log(max);
//_______________________________________________________________
//
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    for (let elem of numbers) {            //for..of е за обхождане на масиви и стрингове, for..in за обекти
        if (elem < 0) {
            negativeNumbers.push(elem);
        }
    }
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
}
//_______________________________________________________________
//
let largestString;

function findLargestString(strings) {
    let temp = "";
    for (let string of strings) {
        if (string.length > temp.length){
            temp = string;
        }
      largestString = temp;  
        
    }
    // set largestString to point to the 
    // longest string found in the strings array passed in
}
//_______________________________________________________________
// todo ???
{
  const fn = function() {return 1;}
  console.log(fn());
  {
     const fn = function() {return 2;}
  console.log(fn());
  }
  fn();
}

//_______________________________________________________________
// todo ???
//Fix the code below to execute as expected without using IIFE. Remember how let and const will bind to block scope differently than using var before.
const userIds = [1, 2, 3];
const users = [];

// TODO: Fix this for loop by scoping the variable i.
// Do not use a IIFE to get to pass.
// HINT - remember how let and const work with block scope.
for (var i = 0; i < userIds.length; i++) {
    fun(function() {
        users.push({
            userId: userIds[i]
        });
    });
}

function fun(cb) { setTimeout(cb) };
//__________________________________________ 
// factory finction as argument of another factory function
function IceCreamFactory(obj) { 
	let isCold = true;
	return Object.assign({}, obj, {  // новият обект ще приеме keys от обекта в аргумента obj и описаните melt и isCold
		melt: function () {
			isCold = false;
		},
		isCold: function () {
			return isCold;
		}
	});
}

let iceCream = IceCreamFactory({}); // създ iceCream с фактори ф-ята IceCreamFactory и празен обект като арг.

function ConeFactory(obj) {
	let isDry = true;
	
	return Object.assign({}, obj, { // новият обект ще приеме keys от обекта в аргумента obj и описаните soggy и isDry
		soggy: function () {
			isDry = false;
		},
		isDry: function () {
			return isdry;
		}
	});
}

let iceCreamCone = IceCreamFactory(ConeFactory({})); /*създ iceCream с фактори ф-ята IceCreamFactory с аргумент
 фактори ф-ята ConeFactory и празен обект като неин аргумент */
console.log(iceCreamCone);  // iceCreamCone има 4 фунцкии като keys
//__________________________________________ 
//use scope and closures to create a private state.
// there is covention for names starting with _ to be private, but this is not a JS guaranteed declaration
  return {
    name: 'Veronika',
    getName: function () {
      return this.name;
    }
  };
}
let developer = instantiateDeveloper();
developer.getName; //> 'Veronika'
developer.name;    //> 'Veronika'
developer.name = 'Not Veronika';
developer.name;    //> 'Not Veronika'           // No privacy!

//
//
function myCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
let counter = myCounter();

  counter.count; //>undefined                    //count is unreachable outside
  count;         //>undefined                    //count is unreachable outside
  
//
// privacy with IIFE
let sodiumChloride = (function(){
  let chemicalFormula = 'NaCl';
  let molarMass = 58.44;

  return {
    getProperties: function(){
      console.log(`Formula: ${chemicalFormula}`);
      console.log(`Molar Mass: ${molarMass} g/mol`);
    }
  };
})();

//
//privacy with IIFE
let person = (function () {
  let name = 'Veronika';

  return  {
    getName: function () {
      return name;
    },
    setName: function (myName){
      name = myName;
    }
  };
})();

person.name;    //> undefined                      //private outside
person.getName; //>  'Veronika'

person.setName('Not Veronika');
person.getName; //> 'Not Veronika'

//
//
