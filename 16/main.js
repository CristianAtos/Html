
var myStr = "This is my first sentence";
myStr += "This is my second sentence. "

console.log(myStr)

//
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length
console.log(lastNameLength)
//
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName= lastName[0];
console.log(firstLetterOfLastName)
//
var myStr= "Jello world"
myStr = "Hello world"

var lastname = "Lovelace";

var thirdLetterOfLastName = lastname[2];
//
var lastName= "Lovelace";
var lastLetterOfLastName = lastName[[lastName.length-1]]
//
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length-2]
//

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun+ " " + myVerb + " to the store " + myAdverb

    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"))

var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

var myArray = [50, 60, 70];
myArray[1] = 45;
console.log(myArray)

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]
var myData = myArray[2][1]
console.log(myData)

var myArray = [["John", 23], ["cat", 2]];
var removedFromOurArray = myArray.pop();
myArray.push(["dog", 3]);
console.log(myArray);

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.shift();
var addToMyArray = myArray.unshift(["Paul", 35]);
console.log(myArray);

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];


function reusableFunction(){
    console.log("Hi World");
}
reusableFunction();

function ourFunctoinWithArgs(a,b){
    console.log(a-b);
}
ourFunctoinWithArgs(5, 4);


var myGlobal = 10;
function fun1(){
    oopsGlobal = 5;
}

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += " myGlobal: " + myGlobal
    }
    if(typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}

fun1()
fun2()


function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

var outerWear = "T-shirt";
function myOutfit(){
    var outerWear = "Sweater"
    return outerWear
}
console.log(myOutfit());
console.log(outerWear)


function minusSeven(num){
    return num - 7;
}

console.log(minusSeven(10))

function timesFive(num){
    return num * 5;
}
console.log(timesFive(5))

var sum = 0;
function addThree(){
    sum = sum +3
}

function addFive(){
    sum += 5;
}

console.log(addFive)


var changed = 0;

function change(num){
    return (num + 5) / 3;
}
changed = change(10)

var processed = 0;

function processArg(num){
    return (num + 3 ) / 5;
}
processed = processArg(7)
console.log(processed)

function nextInLine(arr, item){
    testArr.push(item)
    return item;
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans(){

    return false;
}

function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes, it's true"
        }
        return "No, it's false"
    
}

function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";

}

console.log(trueOrFalse(true))


// Equality operator
function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10))

function testStrict(val){
    if(val === 7){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict("7"))


function compareEquality(a, b){
    if (a === b ){
        return "Equal"
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"))

function testNotEqual(val){
    if (val != 99){
        return "Not Equal"
    }
    return "Equal";
}

console.log(testNotEqual("99"))

function testStrictNotEqual(val){
    if (val !== 17 ){
        return "Not Equal"
    }
    return "Equal"
}

// console.log(testStrictNotEqual(10))

function testGreaterThan(val){
    if (val > 100){
        return "Over 100"
    }
    return "Under 100"
}

function testGreaterOrEqual(val){
    if (val >= 20){
        return "20 or over"
    }
}

function testLessThan(val){
    if (val < 20){
        return "less than 20"
    }
}


function testLessOrEqual(val){
    if (val <= 20){
        return "20 or under"
    }
}


function testLogiaclAnd(val){
    if(val <= 50  && val >= 25){
        return "Yes";
    }

    return "No"
}

console.log(testLogiaclAnd(24))

var names = ["Hole in one", "Eagle", "Birdie", "Par", "Boogie", "Double Boogey", "Go home!"]
function golfScore(par, strokes){
    if (strokes == 1){
        return names[0]
    }
    else if (strokes <= par - 2){
        return names[1]
    }
    else if (strokes == par -1){
        return names[2]
    }
    else if (strokes == par){
        return names[3]
    }
    else if (strokes == par + 1){
        return names[4]
    }
    else if (strokes == par +2){
        return names[5]
    }
    else if(strokes >= par +3) {
        return names[6]
    }
}

console.log(golfScore(5, 5))


function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1: 
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer= "gamma";
            break;
        case 4:
            answer= "delta"
            break;
    }
    return answer
}

console.log(caseInSwitch(2))


function sequentialSizes(val){
    var answer= '';
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer
}

console.log(sequentialSizes(7))

var count = 0 
function cc(card){
    switch(card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count ++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
          count--;
        break;
    }
    var holdbet = "Hold";
    if (count > 0){
      holdbet = "Bet"
    }
    
    return count + " " + holdbet;
  }
  
  cc("A"); cc(3); cc(10); cc(5); cc("J"); 
  console.log(cc("K"))
  
var ourDog = {
    "name" : "Camper",
    "legs": 4,
    "tails" : 1,
    "friends" : ["everything!"]
};

ourDog["bark"] = "woof" 

delete ourDog["bark"]
console.log(ourDog)

function multiplyAll(arr){
    var product = 1;
    for (var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }

    return product; 
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product)

var contacts = [
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Hogwards", "Magic", "Hagrid"]
    }
]
function lookUpProfile(name, prop){
    for (var i=0; i < contacts.length; i++){    
        if(contacts [i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact"
}

var data = lookUpProfile("Sherlock", "lastName");

console.log(data)

function randomFraction(){
    return Math.random()
}
var random = randomFraction()
console.log(random)

function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

var myRandom = ourRandomRange(1, 9);
console.log(myRandom);

function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5, 15 )
console.log(myRandom)

function checkEqual(a, b){
    return (a === b) ?  true :  false;
}
console.log(checkEqual(1, 2))

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0))

const AVG_TEMPERATURES = {
    today : 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
    const {  tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

function makeClass() {
    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat (76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp)