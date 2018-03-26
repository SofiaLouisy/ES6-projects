console.log('hello world /webpack with an automatic update again');

//ES6

//Assignment
let limit = 100;
const fixed_limit = 100;

//keep variables inside blocks (private data)
//local scope
//Using local Don't work with var! Only with let
{
    let limit = 50;
}
console.log(limit) //prints 100

//put variables in template. Note the ` vs '
let insert = 'world';
console.log(`Hello, ${insert}`); //ES6 template literal
//Makes life so much better!

//Using a constant. 
//We can manipulate the list, but not reassign it
const list = [1,2,3,4,5];
list.push(6);
list.shift();
list[2] = 10;
console.log(list);
//list = [2,3] ERROR

//Spread operator. Inserts an array into another!
let a = [20,30,40];
let b = [10, ...a, 50];
console.log(b); //[10, 20, 30, 40, 50];

//As many arguments as you want. Puts arguments into an array!!!!
function collect(...a){
    console.log(a);
}
collect(1,2,3,4,5); //[1,2,3,4,5]

//Destructing assignment (assigning several at once)
let z = [1,2,3,4,5];
let [first,second,third] = z;
console.log(first,second);

//Matches key names within object!
let king = {name: 'Mufasa', kids: 1};
let {kids, name} = king;
//Vi skapar en variabel med namn som på nyckel.
//({kids, name} = king);
console.log(name,kids);

//Anonymous arrow functions
setTimeout(function() {
    console.log("Wohoo!");
},3000);
//ES6
setTimeout(() => {
    console.log("Wohoo again!");
},3000);

//Declaring a variable to the non-anonymous arrow function
let cheer = () => {
    console.log("Wohoo again!");
};

//Helper methods
let values = [20,30,40];
let doubled = values.map(n => n*2);
console.log(doubled);
//same thing as
let double = values.map((n) => {return n*2;})

//Filter method
let points = [7,16,21,4,3,22,5];
let highScores = points.filter(n => n>15);
console.log(highScores);

//Helper methods

//Strings
let c = "wooh" + "oo".repeat(50)+" ".repeat(50);
console.log(c);
let d = `woo${"oo".repeat(50)}`
"butterfly".startsWith("butter"); //true
"butterfly".endsWith("fly") //true
"butterfly".includes("terf") //true

//numbers. Checking! Checks if it is a finite number, and if it is a number that javascript can safily work with
const addToCart = (item,number) => {
    return Number.isFinite(number) && Number.isSafeInteger(number);
}
console.log('shirt',5); //true
console.log('shirt',Infinity) //false

//Prototypes. We can add properties afterwards!
function Wizard(name,house,pet){
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I'm ${this.name}`;
}

Wizard.prototype.pet_name;
Wozard.prototype.info = function() {
    return `I have a ${this.pet}`; //here, we have to have a function declaration
}

let harry = new Wizard("Harry Potter","Gryffindor","Owl");
harry.pet_name = "Hedwig"
console.log(harry.greet());