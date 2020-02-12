/*
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

let iceCreamCone = IceCreamFactory(ConeFactory({}));
//създ iceCream с фактори ф-ята IceCreamFactory с аргумент
//фактори ф-ята ConeFactory и празен обект като неин аргумент
console.log(iceCreamCone);  // iceCreamCone има 4 фунцкии като keys
//__________________________________________ 
//use scope and closures to create a private state.
// there is covention for names starting with _ to be private, but this is not a JS guaranteed declaration
// return {
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

//__________________________________________ 
//switch statements
var age =14;
switch (true) {
  case age < 13:
    console.log( `age is < 13` );
    break;											//след вс. опция се слага break
     case age >= 13 && age <20:
    console.log( `age is between 13 and 20` );
    break;
    case age >= 20 && age <30:
    console.log( `age is between 20 and 30` );
    break;
  default:
    console.log( `age is 30+ `);
}

//__________________________________________ 
//switch statements
var firstName = 'Vladimir';
var job = 'teacher';
switch (job) {
  case 'teacher':
    console.log( firstName + ' teaches kids how to code.');
    break;
     case 'driver':
    console.log( firstName + ' drives an uber in Lebanon.');
    break;
     case 'designer':
    console.log( firstName + ' designs beautiful websites.');
    break;
     default:
    console.log( firstName + ' does something else.');
}
//__________________________________________ 
//

function checkScore (array) {
var score = 0;
for (var i = 0; i < array.length; i++) {
  score += array[i];
}
  score /= array.length;
  console.log(`function checkScore() get parameters ${array} and returns ${score}`);
  return score;
}

var john = [89, 120, 124];
var mike = [116, 94, 123];
var mary = [97, 131, 102];
var scoreJohn = checkScore(john);
var scoreMike = checkScore(mike);
var scoreMary = checkScore(mary);
switch (true) {
  case (scoreJohn === scoreMike && scoreJohn === scoreMary):
    console.log(`all scores are equal to ${scoreJohn}`);
		break;
	case (scoreJohn > scoreMike && scoreJohn > scoreMary):
		console.log(`John\'s team is the winner with score ${scoreJohn}`);
    break;
	case (scoreMike > scoreJohn && scoreMike > scoreMary):
		console.log(`Mike\'s team is the winner with score ${scoreMike}`);
    break;  
  case (scoreMary > scoreJohn && scoreMary > scoreMike):
		console.log(`Mary\'s team is the winner with score ${scoreMary}`);
    break; 
  case (scoreJohn === scoreMike && scoreJohn > scoreMary):
		console.log(`John and Mike teams are the winners with equal score ${scoreJohn}`);
    break;
  case (scoreMary === scoreMike && scoreMary > scoreJohn):
		console.log(`Mary and Mike teams are the winners with equal score ${scoreMary}`);
    break;
  case (scoreJohn === scoreMary && scoreJohn > scoreMike):
		console.log(`John and Mary teams are the winners with equal score ${scoreJohn}`);
    break;
  default: console.log(` uncompleted evaluation task`);
}
//__________________________________________ 
//
var whatDoYouDo = function(job, firstName) {
switch(job) {
  case 'teacher':
    return firstName + ' teaches kids how to code'; //тук няма нужда от  break; т.к. return прекратява изпълнението на функцията
  case 'driver':
     return firstName + ' drive a cab in Lisabon';
  case 'designer':
     return firstName + ' design beautiful websites';
  default:
     return firstName + ' does something else';
	}
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));		

//__________________________________________ 
//coding chalenge 2
//let bills = [124, 28, 268];
 let tips = [];
let total = [];
function tipCalculate(bill) {
	let tip;
	if (bill > 0 && bill < 50) { 				//tip is 20%
		tip = bill * .2; 
	} else if ( bill >= 50 && bill <= 200 ) {	//tip is 15%
		tip = bill * .15; 
	} else if ( bill > 200 ) {
		tip = bill * .1;						//tip is 10%
	} else {return console.log(`${bill} is incorrect bill amount`);
	}
	tips.push(tip);
	total.push(bill + tip);
}
tipCalculate(0);
tipCalculate(124);
tipCalculate(48);
tipCalculate(268);
console.log(tips);
console.log(total);
	
//__________________________________________ 
//coding chalenge 3

let mark = {
	fullName: 'Mark',
	mass: 92,
	height: 1.95,
	checkBmi: function() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
};
let john = {
	fullName: 'John',
	mass: 78,
	height: 1.79,
	checkBmi: function() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
};

if (mark.checkBmi() > john.checkBmi()) {  //така зад. сравнение вика функциите, създ. ключовете bmi в обекта и връща ст-стите им
	console.log(`${mark.fullName} has a higher BMI = ${mark.bmi}`);
} else if (mark.bmi < john.bmi) {
	console.log(`${john.fullName} has a higher BMI = ${john.bmi}`);
} else { console.log(`${john.fullName} and ${mark.fullName} have equal BMI's = ${john.bmi}`);
}

//__________________________________________ 
//
for (var i = 0; i < 10; i++) {
	console.log(i);
}
//for loop
var john = ['john', 'smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
	console.log(john[i]);
}
//while loop
var john = ['john', 'smith', 1990, 'designer', false];
var i = 0;
while(i < john.length) {
  console.log(john[i]);
  i++;
}
//continue and break statements
//continue - continue to the next iterration
var john = ['john', 'smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) { 
  if (typeof john[i] !== 'string') continue; //
	console.log(john[i]);
}
//break
var john = ['john', 'smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) { 
  if (typeof john[i] !== 'string') berak;
	console.log(john[i]);
}
//looping backward
var john = ['john', 'smith', 1990, 'designer', false];
for (var i = john.length - 1; i >=0; i--) { 
	console.log(john[i]);
}

//__________________________________________ 
//coding chalenge 5 calculate tips using object with array and method with condition and loop. Find average tips for family, compare them
let johnFamily = {
	name: 'John\'s family',
	bills: [124, 48, 268, 180, 42],
	calculateTips: function() {		//20% <50, 15% 50 -> 200, 10% >200
	this.tips = [];
	this.totalBills = [];
		let percentage, bill;
		for (let i = 0; i < this.bills.length; i++) {
			bill = this.bills[i]
		if (bill > 0 && bill < 50) {
			percentage = .2;
		} else if (bill >= 50 && bill <= 200 ) {
			percentage = .15;
		} else if (bill >= 200) {
			percentage = .1;
		} else {
			console.log(`johnFamily.bill[${i}] is 0 or negative`);
			continue;
		}
		this.tips.push(bill * percentage);
		this.totalBills.push(bill + bill *percentage);
		}
	}
}

let markFamily = {
	name: 'Mark\'s family',
	bills: [77, 375, 110, 45],
	calculateTips: function() {		//20% <100, 10% 100 -> 300,  25% >300
	this.tips = [];
	this.totalBills = [];
		let percentage, bill;
		for (let i = 0; i < this.bills.length; i++) {
			bill = this.bills[i]
		if (bill > 0 && bill < 100) {
			percentage = .2;
		} else if (bill >= 100 && bill <= 300 ) {
			percentage = .10;
		} else if (bill >= 300) {
			percentage = .25;
		} else {
			console.log(`markFamily.bill[${i}] is 0 or negative`);
			continue;
		}
		this.tips.push(bill * percentage);
		this.totalBills.push(bill + bill *percentage);
		}
	}
}
johnFamily.calculateTips();
markFamily.calculateTips();

//create a function to calc avverage of a given tips and log to console which family paid the highest tips on average

function averageTips(array) {
  console.log(array);
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
  console.log(`междинна сума: ${sum}`);
	return sum / array.length;
}

johnFamily.average = averageTips(johnFamily.tips);
markFamily.average = averageTips(markFamily.tips);

if (johnFamily.average > markFamily.average) {
	console.log(`John's family have higher average tips: ${johnFamily.average}`);
} else if (johnFamily.average < markFamily.average) {
	console.log(`Mark's family have higher average tips: ${markFamily.average}`);
} else if (johnFamily.average === markFamily.average) {
	console.log(`John's and Mark's family have equal average tips: ${johnFamily.average}`);
} else {
	console.log(`error: can't compare average bills`);
}

//__________________________________________ 
//
var personProto = {
	calculateAge: function() {
		console.log(2020 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1980;
john.job ='Developer';

var jane = Object.create(personProto, {
	name: { value: 'Jane' },
	yearOfBirth: { value: 1988 },
	job: { value:designer }
};
*/
//__________________________________________ 
//
/*
//Primitive vs objects
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a, b);
//Objects
var obj1 = {
	name: 'John',
	age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age);
//Functions
var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisabon'
};

function change(a,b) {
	a = 30;
	b.city = 'San Fransisco';
}

change(age, obj);
console.log(age, obj.city);
*/
//__________________________________________ 
//Passing functions as arguments
/*
var years = [1980, 1988, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	let arrRes = [];
	for (let i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2020 - el;
}

function isFullAge (el){
	return el >= 18;
}

function isFullAge2 (el) {
	return (2020 - el) >= 18 ? true : false;
}

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
	return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}

let ages = arrayCalc(years, calculateAge);
console.log(ages);
let fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
let fullAges2 = arrayCalc(years, isFullAge2);
console.log(fullAges2);
let maxHeartRates = arrayCalc(ages, maxHeartRate);
console.log(maxHeartRates);
*/
//__________________________________________ 
//Functions returning functions
/*
function interviewQuestion(job) {
if (job === 'designer') {
	return function(name) {
		console.log(`${name}, can you please explain what UX design is?`);
	}
} else if (job === 'teacher') {
	return function(name) {
		console.log(`What subject do you teach, ${name}?`);
	}
} else {
	return function(name) {
		console.log(`Hello ${name}, what do you do?`);
	}
}
}
 let teacherQuestion = interviewQuestion('teacher');
 //това е function expression, т.к. interviewQuestion връща функция
 teacherQuestion('John');
 let designerQuestion = interviewQuestion('designer');
 designerQuestion('Viki');
 
 interviewQuestion('teacher')('Mark');
*/
//__________________________________________ 
//IIFE
/*
//hiding variable in a function
function game() {
	let score = Math.random() * 10;
	console.log(score >= 5);
}
game();
//IIFE
(function () { 
	let score = Math.random() * 10;
	console.log(score >= 5);
})();

//passing arguments to IIFE
(function (goodLuck) { 
	let score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);
*/
//__________________________________________ 
// Closures
/*
function retirement(retirementAge) {
	let a = 'year left until retirement.';
	return function(yearOfBirth) {
		let age = 2020 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}
//варинат 1 
let retirementUS = retirement(66);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
// варинат 2
//retirement(66)(1990);

//пренаписване на задачата interviewQuestion с изп на closure
function interviewQuestion(job) {
	return function(name) {
		if (job === 'designer') {
		console.log(`${name}, can you please explain what UX design is?`);
		} else if (job === 'teacher') {
		console.log(`What subject do you teach, ${name}?`);
		} else {
		console.log(`Hello ${name}, what do you do?`);
		}
	}
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Viki');
interviewQuestion('teacher')('Mark');
*/

//__________________________________________ 
//Bind, call, apply
///*
let john = {
	name:'John',
	age:26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log(`Good ${timeOfDay}, Ladies and gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`);
		} else if (style === 'friendly') {
			console.log(`Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`);
		}
	}
}

let emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};
	
john.presentation('formal', 'morning');
// call
john.presentation.call(emily, 'friendly', 'afternoon');	
//apply - това в сл. няма да работи защото методът не очаква да приеме масив!
john.presentation.apply(emily, ['friendly', 'afternoon']);
//bind - създава копие на фунцията с променен this
let johnFriendly = john.presentation.bind(john, 'friendly'); //тук освен задаване на this = john, задаваме и първия аргумент на метода presentation
//johnFriendly e нова функция със this = john и първи аргумент 'friendly', koqto очаква втори аргумент
johnFriendly('morning'); 
johnFriendly('night');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

//пренаписване код с bind
var years = [1980, 1988, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	let arrRes = [];
	for (let i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2020 - el;
}

function isFullAge (limit, el){ //задаваме втори парам limit
	return el >= limit;
}


let ages = arrayCalc(years, calculateAge);
console.log(ages);
//т.к arrayCalc очаква само един аргумент от колбак ф-ята го задаваме предварително с bind :)

let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

//__________________________________________ 
//
///*