/****************************
Arrays
****************************/
console.log("Running t14_arrays.js")
console.log("67")

// variables
var user = "Leo";
var age = 15;
var money = 0;
var year  = 2026;
var answer;
var no1 = 10;
var no2 = 2;
const OUTPUT = document.getElementById("JavaScriptOutput");

OUTPUT.innerHTML = "<h2>Added by JavaScript. </h2>"

function start(){

OUTPUT.innerHTML += "<br>My name is " + user
OUTPUT.innerHTML += ". <br>As of " + year + ", I am " + age
OUTPUT.innerHTML += ". <br>I have " + money + " dollars"
answer = no1 + no2;
OUTPUT.innerHTML += ". <br><br>Add - " + answer
answer = no1 - no2;
OUTPUT.innerHTML += ". <br>Subtract - " + answer
answer = no1 * no2;
OUTPUT.innerHTML += ". <br>Multiply - " + answer
answer = no1 / no2;
OUTPUT.innerHTML += ". <br>Divide - " + answer
var born = year - age;
OUTPUT.innerHTML += ". <br><br>You were born in " + born
money = money + answer
OUTPUT.innerHTML += ". <br>I now have " + money + " dollars."
var later = age + 10;
OUTPUT.innerHTML += "<br>In 10 years I will be " + later + "."




function welcome(){
    OUTPUT.innerHTML += "<br><br>Welcome to the shop"
}

function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<br>" + _name + ": " + _price
}

function calculateChange(_money, _price){
    var change = _money - _price
    OUTPUT.innerHTML += "<br><br>You have $" + change + " change.<br><br>"
}

let opinionChocolate = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"]

welcome()
displayProduct("Chocolate bar", "$4")
displayProduct("Chips", "$3")
displayProduct("Drink", "$2.50")

const AGE_FIELD = document.getElementById("ageField");
let userAge  = Number(AGE_FIELD.value);
const MONEY_FIELD = document.getElementById("moneyField");
let userMoney = Number(MONEY_FIELD.value);
const CHOCOLATE_FIELD = document.getElementById("chocolateField");
let userChocolate = Number(CHOCOLATE_FIELD.value);
OUTPUT.innerHTML += "<br><br>You are " + userAge + "<br><br>"
OUTPUT.innerHTML += "<br><br>You have $" + (0 + userMoney) + "<br><br>"
if (userMoney < 4){
   OUTPUT.innerHTML += "<br><br>Sorry you CAN'T afford a chocolate bar."
} else{
    OUTPUT.innerHTML += "<br><br>You CAN afford a chocolate bar.<br><br>"
    calculateChange(userMoney, 4)
}

OUTPUT.innerHTML += "<br><br>" + opinionChocolate[userChocolate]


}