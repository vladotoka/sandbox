//string to number
maxScoreNumber = parseInt(inputString);
//Ternary operator
//The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements. 
//синтаксис:
conditional ? (if condition is true) : (if condition is false)
//използване в код:
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

// има същото действие като използване на if else
var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);
//възможна употерба в console.log:
var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

//------------------------------------------------------
// case превключване
var option = 3; //може да се използва с всеки тип данни, не само с числови

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break; // липсата на break предизвиква falling-through - изпълняване на условията от избрания case до долу
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}
//------------------------------------------------------
var output = "You’ll receive "
    output += "a custom card, ";
	console.log(output); //връща: You’ll receive a custom card, 
//------------------------------------------------------
To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US").
//------------------------------------------------------
while (true) {
  console.log("true is never false, so I will never stop!"); //Infinity Loop :)
}
//------------------------------------------------------
//basic while loop:
var x = 0; // when to start ( IF The value of x is undefined, so the while loop never executes.
while (x < 10) { // when to stop
  console.log(x);
  x = x + 2; // how to get to the next item
}
//------------------------------------------------------
//loops
for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}
//nested loops:
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}
//------------------------------------------------------
x++; //increse +1 and return x before the increase
++x; //increse +1 and return x after the increase
x--;
--x;
x += 3;
x *= 8;
x /= 10;
//----------------------------------------
//functions
function findAverage(x, y) { //x and y are parameters
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9); // 5 and 9 are arguments
//----------------------------------------
//варинат 1  без return
function sayHello() {
  var message = "Hello!"
  console.log(message);
}
//извикване на функцията
console.log(sayHello());
// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

// function returns "Hello!" and console.log prints the return value
console.log(sayHello());
//----------------------------------------
//Function Expression скрита функция без име запазена в променлива
var catSays = function(max) { //функцията може и да има име но не е задължително
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
//catSays; връща описанието на функцията, а catSays(x) връща деиствието и според аргумента х 
//Being able to store a function in a variable makes it really simple to pass the function into another function.
// A function that is passed into another function is called a callback. 
// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
//----------------------------------------
//Named function expressions
//Inline function expressions
// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

   //Returns: My favorite movie is Finding Nemo
//.................
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) { //inline function expression
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
//Returns: My favorite movie is Finding Nemo
//----------------------------------------
//Arrays 
// MORE ABOUT ARRAYS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// creates a `donuts` array with three strings
var donuts = ["glazed", "powdered", "jelly"];// елемнтите на масива се разделят със запетаи и се огражат с []

But strings aren’t the only type of data you can store in an array. You can also store numbers, booleans… and really anything!

// creates a `mixedData` array with mixed data types
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];
// creates a `arraysInArrays` array with three arrays
var arraysInArrays = [[1, 2, 3], ["Julia", "James"], [true, false, true, false]];
//Nested arrays can be particularly hard to read, so it's common to write them on one line, using a newline after each comma:
var arraysInArrays = [
  [1, 2, 3], 
  ["Julia", "James"], 
  [true, false, true, false]
];
// дължина на масив, push, pop, e.t.c
//методи
var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length); //връща дължината 
donuts.push("powdered"); // pushes "powdered" onto the end of the `donuts` array, освен това връща новата дължина
donuts.pop(); // pops "powdered" off the end of the `donuts` array , освен това връща премахнатия елемент
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and 
//adds "chocolate cruller" and "creme de leche" starting at index 1
//The first argument represents the starting index from where you want to change the array, the second argument
//represents the numbers of elements you want to remove, and the remaining arguments represent the elements you want to add.
//ако първият аргумент е отрицателен указва начало = дължната на масива минус стойноста на аргумента
//ако първият аргумент е отрицателен или нула , не се премахват елементи от масива, но тр, да се добави поне един
//reverce
var reverseMe = ["h", "e", "l", "l", "o"];
console.log(reverseMe);
reverseMe.reverse();
console.log(reverseMe);
//sort
var sortMe = [2, 1, 10, 7, 6];
sortMe.sort();
console.log(sortMe);//id you notice that 10 appears before 2? Traditionally, the number 2 comes before 10.
//But in the .sort() method, numbers are converted to Unicode strings, so 10 comes before 2 in Unicode order.
Array.prototype.fill() // Fills all the elements of an array from a start index to an end index with a static value.
Array.prototype.shift()//Removes the first element from an array and returns that element.
Array.prototype.unshift()//Adds one or more elements to the front of an array and returns the new length of the array.
var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
turnMeIntoAString.join('');//обединява масива в стринг

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
//--------- method FOR EACH
donuts.forEach(function(donut) {   donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
//---------
words = ["cat", "in", "hat"];//The function that you pass to the forEach() method can take up to three parameters. 
//In the video, these are called element, index, and array, but you can call them whatever you like.

words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
myArray.forEach(element, position, array) //forEach извиква всички елементи, но не ги променя
myArray.map(func) вика и създава нов масив с промените  чрез return
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

    donuts array: ["jelly donut", "chocolate donut", "glazed donut"]
    improvedDonuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]
//----------------------------------------
//----------------------------------------
// objects
    NOTE: typeof is an operator that returns the name of the data type that follows it:

    typeof "hello" // returns "string"
    typeof true // returns "boolean"
    typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
    typeof function hello() { } // returns "function"
//----------------------------------------
var sister = { //дефинирането на обекти е като дефиниране на променлива. Задават се свойства във формат key:value
// ограждат се с {} и завършва с;
  name: "Sarah", //отделните 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
  paintPicture: function() { return "Sarah paints!"; } //метод - value  в key:value е фунция вика се с object.method() -
 // в случая name.paintPicture()
};	
/*The syntax you see above is called object-literal notation. There are some important things you need to remember when 
you're structuring an object literal:

    The "key" (representing a property or method name) and its "value" are separated from each other by a colon
    The key: value pairs are separated from each other by commas
    The entire object is wrapped inside curly braces { }.

And, kind of like how you can look up a word in the dictionary to find its definition, the key in a key:value pair allows 
you to look up a piece of information about an object. Here's are a couple examples of how you can retrieve information
 about my sister's parents using the object you created.

// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]

Using sister["parents"] is called bracket notation (because of the brackets!) and using sister.parents is called 
dot notation (because of the dot!).
*/
//НЕ ТРЯБВА ДА СЕ ИЗПОЛЗВАТ ЦИФРИ В НАЧАЛОТО НА ИМЕНАТА НА СВОЙСТВАТА НА ОБЕКТИТЕ  1Name: "first" 
//не трябва да се използват и интервали и тирета в тях( същото важи и за всички имена на променливи
//---------------------------------------------------------------------------
//this
//console.log( this );

var object = {
    prop: this,
    embed:
    {
        method: function(){ return this; }
    }
};

var array = [
    this,
    function(){ return this; }
];

function global(){
    return this;
}

// Normal invokation
global();
object.embed.method();
array[1]();

// Assign context
global.call( object );
object.embed.method.call( object );
array[1].call( object );

// New context
new global();
new object.embed.method( object );
new array[1]();
//__________________________________________
//constructors конструктори
function Apple( x, y, color, score )//именуваме с главна буква
{
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = score;
}
var apple1 = new Apple( 101, 20, "red", 200 ); //извикваме с new и присвояваме на променлива, за да можем да се обръщаме~ 
var apple2 = new Apple( 20, 30, "green", 150 );//~към новия обект. Можем да създадем и обект, към който не можем да се
//обърнем по този начин: new Apple( 20, 30, "green", 150 );
//__________________________________________
//prototype
Apple.prototype = {
  eat		:function(){ return "eat the apple"; },//ако имаме this вътре в метода, той сочи към извикалия го член
  throw	:function(){ return "throw the apple";}
};
//прототипите задават общи членове или методи за обектите създадени с конструктора, извикване: apple1.eat(), 


//======================================================
var pHello = document.getElementById('hello');

pHello.innerText = "one new world"; //променя текста и

pHello.innerHTML += " order <span>hello world</span>";
//pHello.outerHTML = '<h2 id="hello">new world order <span>hello world</span></h2>';


var spanH1 = document.querySelectorAll('h1 span'); // създава масив spanH1 с елемнти от указаните селектори

spanH1[0].innerHTML = "new text here!!"; //променя вътрешната част на html на първия елемент 

console.dir( document.getElementById('run') ); // 

var pRun = document.getElementById('run'); // създава променлива pRun с прихванатия елемент с id = run 
pRun.innerText += "! She is waiting for yore move!"; //променя текста и
pRun.innerHTML += 'Love! <span style="color:red">Hug!</span>'; //променя вътрешната част на html
pRun.outerHTML = '<h3 id="run"> Love<span style="color:red"> and light!</span></h3>'; //променя външната част на html
var h3 =document.querySelectorAll('h3'); // създава масив span h3 с елемнти от указания селектор  h3
h3[0].innerHTML = 'hug'; //променя вътрешната част на html на първия елемент 
//_______________________________________________________
//промяна на стилове 
var el = document.getElementById('styleA'); //прихваща елемент с id StyleA
/*el.style.background = "blue"; //задава му стил. използват се кавички за стринговете. ЗАМЕНЯ ЦЕЛЕИЯ СТИЛ!
el.style.color = "white";
el.style.width = "200px"; */

el.style.cssText= " background:blue; color:white; width:200px "; //задава същият стил, но директно като 
                                                                //CSS text, не се използват кавички, описва се като в CSS
el.style.cssText += " height:200px; "; //добавя в стила, без да го заменя целия
//_______________________________________________________
// eventlistener

//1. Inline in the DOM
//<select name="cars" onclick="console.log('you clicked me')">
//2. JS
var select =  document.getElementsByName('cars')[0];
select.onclick = function( event ){
	console.log ( event );
};

function ClickCallback( event ){
	console.log( 'clicked by add event listener' );
}
//може да добавим мновество функции към едно събитие
	select.addEventListener( 'click', ClickCallback ); //добавя EventListener и указва при click изпълненение на ф ClickCallback
    //select.removeEventListener( 'click', ClickCallback ); // премахва горния EventListener
/*select.addEventListener( 'click', function( event){ // 
	console.log( 'clicked by add event listener' )
} ); */  //добавя addEventListener и указва при click изпълненение на безименна ф, но така не мове да се премахне, т.к е безименна

// 
//Create & appendChild &insertBefore method's 
var element = document.createElement('div'); //създава елемент div
element.style.cssText = "width: 200px; height:20px; background:blue; color:orange;";
element.onclick = function(){ alert('hello'); };
element.innerText = "TEXT"; 
document.body.appendChild( element ); //поставя елемента в body(след таговете за скрипта)
//можем да таргетираме мястото на поставяне
var target = document.getElementById('yellow'); //задава на target да прихване елемент с ID=yellow
document.body.insertBefore( element, target );  //поставя елемента element на позиция указана с поменлива target

//var target = document.getElementsByTagName('select'); //същото с таргетиране на таг селект
//document.body.insertBefore( element, target[0] );     //същото с таргетиране на таг селект
//__________________________________________
//__________________________________________
//UDACITY - Object-Oriented JavaScript

const developer = {
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  },
  favoriteLanguage: function (language) {
    console.log(`My favorite programming language is ${language}`);
  }
};


developer.favoriteLanguage('JavaScript');
// My favorite programming language is JavaScript'
//__________________________________________
//this read me inside
const car = {
  numberOfDoors: 4,
  drive: function () {
     console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  }
};

const letsRoll = car.drive;

letsRoll(); //при извикана така ф-я,  this сочи към window!
//__________________________________________
//const read me let read me var read me

/*Globals and var, let, and const

The keywords var, let, and const are used to declare variables in JavaScript. var has been around since the beginning 
of the language, while let and const are significantly newer additions (added in ES6).

Only declaring variables with the var keyword will add them to the window object. If you declare a variable outside of 
a function with either let or const, it will not be added as a property to the window object. */
//__________________________________________
//$ read me syntax 
console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`); //use (`), not (')!
//__________________________________________
//ADD DIV TO HEADER WITH DOM
function addDivToHeader (text) {
let a =text;
  const newDiv = document.createElement('div');
  newDiv.textContent = "new Div created! " + a  ;
 
  const headerSection = document.querySelector('header');
  headerSection.appendChild(newDiv);
}

addDivToHeader ('sometext');
//__________________________________________
//call back function
function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {  //  n Приема array[i] --> if (array[i] > 0)
      console.log(array[i]);
    }
  }
}
function isPositive(n) {
  return n > 0;
};
each([-2, 7, 11, -4, -10], isPositive); // връща в конзолата само позитивните числа

//__________________________________________
//closure 
/*Applications of Closures

To recap, we've seen two common and powerful applications of closures:

    1.Passing arguments implicitly.
    2.At function declaration, storing a snapshot of scope. */


function myCounter() {
  let count = 0;				//count e недостъпна отвън променлива, т.к е локално декларирана
  return function () {
    count += 1;					//за nesded функцията count  е достъпна 
    return count;				//closure storing a snapshot of scope, and count is mutable
  };
}
let counter = myCounter();

counter();						//всяко извикване на функцията увеличава count с 1
// 1
counter();						//
// 2
counter.count;					//count e недостъпна отвън
// undefined
count;
// undefined
/*The existence of the nested function keeps the count variable from being available for garbage collection, 
therefore count remains available for future access. After all, a given function (and its scope) does not end when the
 function is returned. Remember that functions in JavaScript retain access to the scope that they were created in! 
 
 Summary
A closure refers to the combination of a function and the lexical environment in which that function was declared. 
Every time a function is defined, closure is created for that function. This is especially powerful in situations where a
 function is defined within another function, allowing the nested function to access variables outside of it.
 Functions also keep a link to its parent's scope even if the parent has returned. This prevents data in its parents from 
 being garbage collected.*/
 
 //closure scope snapshot 
 //__________________________________________

 // Because this function returns another function that has access to the
  // "private" var i, the returned function is, effectively, "privileged."

  function makeCounter() {
    // `i` is only accessible inside `makeCounter`.
    var i = 0;

    return function() {
      console.log( ++i );
    };
  }

  // Note that `counter` and `counter2` each have their own scoped `i`.

  var counter = makeCounter();
  counter(); // logs: 1
  counter(); // logs: 2

  var counter2 = makeCounter();
  counter2(); // logs: 1
  counter2(); // logs: 2

  i; // ReferenceError: i is not defined (it only exists inside makeCounter)
  //__________________________________________
  // this example
  const dog = {
  bark: function () {
    console.log('Woof!');
  },
  barkTwice: function () {
    this.bark();
    this.bark();
  }
};
dog.bark();
// Woof!

dog.barkTwice();
// Woof!
// Woof!

  //__________________________________________
  //call example         call приема като първи агумент с-ст на this, a като следващи тези на извиканата ф-я
  function multiply(n1, n2) {
  return n1 * n2;
}

multiply.call(window, 3, 4); 
// 12

//call example  2
  const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};
const pride = {
  title: 'Pride and Prejudice'
};

mockingbird.describe.call(pride);  //call задава this да сочи към pride
// 'Pride and Prejudice is a classic novel'
/*Since mockingbird's describe() method references this.title, we need to access the title property of the object that
 this refers to. But since we've set our own value of this, the value of this.title will be accessed from the pride object!
 As a result, mockingbird.describe.call(pride); is executed, and we see 'Pride and Prejudice is a classic novel' in the 
 console. */
 
 //apply example
 //multiply.apply(window, [3, 4]); apply прави сущото като .call ,  но взема масив от параметри за виканата ф-я като 2ри параметър
 
//__________________________________________ 
 //bind example -bind създава нова ф-я със записана зададена ст-ст на  this = зададената като параметър
 //Saving this with bind()
/*Similar to call() and apply(), the bind() method allows us to directly define a value for this. bind() is a method 
that is also called _on_ a function, but unlike call() or apply(), which both invoke the function right away -- 
bind() returns a new function that, when called, has this set to the value we give it. */
 
 
 function invokeTwice(cb) {  //вика два пъти ф-ята приета като параметър
   cb();
   cb();
}

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  }
};
 
invokeTwice(dog.growOneYear); //така вика два пъти ф-ята приета като параметър, нот.к е извикана като ф-я this сочи window
								//така че this.age +=1 не променя age!
dog.age;
// 5 
 //възможно решение 1: с anonymous closure to close over the dog object 
 invokeTwice(function () { 
  dog.growOneYear(); 
});
dog.age; //7

 //възможно решение 2: 
 const myGrow = dog.growOneYear.bind(dog); // bind създава нова ф-я със ст-ст на  this = dog
 invokeTwice(myGrow);
 dog.age; //7
 
 //__________________________________________ 
 //prototype example
 function Hamster() {
  this.hasFur = true; }
var waffle = new Hamster();
var pancake = new Hamster();
Hamster.prototype.eat = function () {  //създаване на прототип eat, вс създ. с конструктора обекти имат тайна връзка с него
  console.log('Chomp chomp chomp!');
};
waffle.eat(); //>Chomp chomp chomp!
pancake.eat(); //>Chomp chomp chomp!
//сега да променим prototype
Hamster.prototype = {
  isHungry: false,
  color: 'brown'
};
//ОК
console.log(waffle.color); //>undefined // старите създадени обекти нямат връзка с новите ключове на prototype
console.log(pancake.isHungry); //> undefined
waffle.eat(); //> 'Chomp chomp chomp!' // но продължават да имат невидима такава със старите, които са били при създ. им 
//
var muffin = new Hamster();
muffin.eat(); //>TypeError: muffin.eat is not a function // новия създ. обект няма връзка със старите ключове на prototype
console.log(muffin.isHungry); //>false //  но има връзка с новите :)
console.log(muffin.color); //>brown    //

//__________________________________________ 
// hasOwnProperty example()  //boolean-get as param checked value, allows you to find the origin of a particular property. 
function Phone() {
  this.operatingSystem = 'Android';
}
Phone.prototype.screenSize = 6;
var myPhone =new Phone();
var own = myPhone.hasOwnProperty('operatingSystem');
console.log(own); //>true //защото е property създадено от конструктора
var inherited = myPhone.hasOwnProperty('screenSize');
console.log(inherited); //>false //защото е property наследено от prototype

//isPrototypeOf example //boolean
/*method, which checks whether or not an object exists in another object's prototype chain. 
Using this method, you can confirm if a particular object serves as the prototype of another object. */
var rodent = {
  favoriteFood: 'cheese',
  hastail: true
};
function Mouse() {
  this.favoriteFood = 'cheese';
}
Mouse.prototype = rodent;
var ralph = new Mouse();
var result = rodent.isPrototypeOf(ralph);
console.log(result); //>true

//__________________________________________ 
//Object.getPrototypeOf()  връща обект със свойства на прототипа на обекта даден като параметър
//като продължение на предния код
const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype); //> { favoriteFood: 'cheese', hasTail: true }
 
//constructor example //връща функцията, която конструктор на обекта

function Longboard() {
  this.material = 'bamboo';
}
var board = new Longboard();
console.log(board.constructor);
//__________________________________________ 
// Object.create()
function Animal (name) {
	this.name = name;
}
Animal.prototype.walk = function () {
	console.log(`${this.name} walks!`);
};
function Cat (name) {
	Animal.call(this, name); /*call the superconstructor on the cat instance in the cat objects
	вика Animal конструктор, но с call и this сочещо към Cat конструктора */
	this.lives = 9;
}
Cat.prototype = Object.create(Animal.prototype); //създаваме proto обект наследяващ proto на Animal
Cat.prototype.constructor = Cat; //променяме конструктора на Cat, иначе всички cat обекти ще са с конструктор сочещ Animal 
Cat.prototype.meow = function () {
	console.log('Meow!');
};
const bambi = new Cat('Bambi');
bambi.meow(); //>Meow!
bambi.walk(); //Bambi walks!
bambi.name;   //"Bambi"

//__________________________________________ 
//timer със setTimeout
<div id="txt"></div>

<script>
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(function(){ startTime() }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
</script>

</body>
</html>

//__________________________________________ 
// timer 2 със setInterval
<!DOCTYPE html>
<html>
<body>

<p>A script on this page starts this clock:</p>
<p id="demo"></p>

<button onclick="myStopFunction()">Stop time</button>

<script>
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
}
</script>

</body>
</html>

//__________________________________________ 
//factory functions

function Radio(mode) {
  let on = false;             //задава скрито пропътри на новия обект, т.к не създава key в новия обект
  return {
    mode: mode,
    turnOn: function () {
      on = true;
    },
    turnOff: function () {
      on = false;
    },
    isOn: function () {
      return on;
    }
  };
} 
let fmRadio = Radio('fm'); 
fmRadio.isOn(); //>false  //първоначалното състояние  на on е зададено от фактори ф-ята, но fmRadio няма пропъти on, то е скрито

//__________________________________________ 
//

function CoffeeMaker(object) {
  let needsrefil = false;
  return Object.assign({}, object, {
    pourAll: function () {
      needsRefil = true;
    },
    isEmty: function () {
      return needsRefill;
    }
  });
}
const mixedCoffeeMaker = CoffeeMaker({ style: 'percolator'});
mixedCoffeeMaker;

//__________________________________________ 
//The Revealing Module Pattern

let myModule = (function (){
  function privateMethod (message) {
    console.log(message);
  }

  function publicMethod (message) {
    privateMethod(message);
  }

  return {
    publicMethod: publicMethod         
  };
})();
//
//
let myModule2 = (function () {
  function privateMethod (message) {
    console.log(message);
  }

  return {
    publicMethod: function (message) {
      privateMethod(message);
    }
  };
})();

//__________________________________________ 
//color console.log
console.log('%c End of script :)', 'color: blue; font-weight: bold;' );
//__________________________________________ 
//