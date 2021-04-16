// @ts-check

/*1. Write a JavaScript program to display the current day and time in the following format.  
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38*/

function updateTime(){
  let date = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let today = days[date.getDay()];
  let hours = date.getHours();
  let meridian = function(){
    if (hours == 12) {
      return hours + " PM";
    } else if (hours > 12) {
      return (hours - 12) + "PM";
    } else {
      return hours + "AM";
   }
  }

 let minutes = date.getMinutes();
 if (minutes < 10){
     // @ts-ignore
     minutes = "0" + minutes;//Visual code editor doesn't like this but it still works 
 }
 let seconds = date.getSeconds();
 if (seconds < 10){
     // @ts-ignore
     seconds = "0" + seconds;
 }

//put it all together

let theTimeIs = `Today is : ${today}. Current time is : ${meridian()} : ${minutes} : ${seconds}`;

document.getElementById("exercise1").innerHTML = theTimeIs;
}

setInterval(updateTime, 1000);

/*3. Write a JavaScript program to get the current date.  
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

let testDate = new Date();

let dateToday = function(){
  let d = new Date();
  let getDate = d.getDate();
    if (getDate < 10){
      // @ts-ignore
      getDate = "0" + getDate
    }
  let getMonth = d.getMonth() + 1;
    if (getMonth < 10){
      // @ts-ignore
      getMonth = "0" + getMonth
    }
  let getYear = d.getFullYear();
  return "The date today is " + getDate + "/" + getMonth + "/" + getYear;
}

document.getElementById("theDate").innerHTML = dateToday();

//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

/*Heron's formula: calculate s = (a + b + c)/2
Area = square root of s(s-a)(s-b)(s-c)*/

let triangleArea = function(sideA,sideB,sideC){
  let s = (sideA + sideB + sideC)/2;
  let calcSum = s * (s-sideA) * (s-sideB) * (s-sideC);
  let area = Math.sqrt(calcSum);
  return area.toPrecision(3);
}

//5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 

function rotateString(string){
  let s = document.getElementById(string); //point to the text in the document
  let sNode = s.childNodes[0]; //point to the first character of the text string
  let sText = sNode.data; //point to the function which changes the first character of the string

setInterval(() => {
  sText = sText[sText.length - 1] + sText.substring(0, sText.length - 1); //take off the end then add to the beginning
  sNode.data = sText; //the rotated string becomes the new string
}, 100);
};

rotateString("string");

//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

/*To determine whether a year is a leap year, follow these steps:

1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
4. The year is a leap year (it has 366 days).
5. The year is not a leap year (it has 365 days).*/

function isLeapYear(year){
  let solutionText = document.getElementById("answer"); 
  year = document.getElementById("year").value; //get the user to input the year
  let yearConvert = parseInt(year, 10); //convert the input to a number
    if (yearConvert % 4 === 0 && yearConvert % 100 !== 0){
    solutionText.innerText = ("This is a leap year!")}
    else if (yearConvert % 400 === 0){
    solutionText.innerText = ("This is a leap year!")}
    else {
    solutionText.innerText = ("This is NOT a leap year")
  }
}

//7. Write a JavaScript program to find all the Sundays on 1st January between 2014 and 2050.

function checkSundays(){
  let sundays = document.getElementById("sundays");

   for (let year = 2014; year <= 2050; year++){
   let d = new Date (year,0,1);
    if (d.getDay() === 0){
    let node = document.createElement("li")
    let textnode = document.createTextNode(year + " is a Sunday! Hurrah!")
    node.appendChild(textnode)
    sundays.appendChild(node);
  }
 }
}

checkSundays();

//8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

function guessNum (userGuess){
 userGuess = prompt("Enter a number between 1 and 10");
 parseInt (userGuess, 10);
 let guessCheck = document.getElementById("guessCheck");
 let randomNum = Math.random();
 let randomByTen = randomNum *= 10;
 let randomRounded = Math.floor(randomByTen);
   if (userGuess == randomRounded){
    guessCheck.innerText = "Good Work"
   } else {
     guessCheck.innerText = "Not Matched, the number was " + randomRounded
   }
}

//9. Write a JavaScript program to calculate days left until next Christmas.

//There are 359 days from 1 Jan to 25 December
//Use the getTime() method to get the number of milliseconds for the year to date 
//and then divide by the number of milliseconds in a day 
//i.e. 1000 milliseconds (1 second) * 60 seconds (1 minute) * 60 minutes (1 hour) * 24 hours (1 day)

function howManyDays (){
  let d = new Date();
  let christmas = new Date (d.getFullYear(),11,25)
  let oneDay = 1000 * 60 * 60 * 24;
  let daystoNow = d.getTime() / oneDay;
  let daystoXmas = christmas.getTime() / oneDay;
  let countTheDays = Math.ceil(daystoXmas - daystoNow);
  let thisManyDays = document.getElementById("xmas");
  thisManyDays.innerText = "There are " + countTheDays + " days till Christmas!";
}

howManyDays()

//10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

  

function multiplyBy()
{
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
}

//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
//F = c*9/5 + 32
//C = (f-32) * 5/9

function convertCF() {
  fahrenheit = document.getElementById("fahrenheit").value;
  celsius = document.getElementById("celsius").value;
  let conversion =  celsius*9/5 + 32;
  document.getElementById("conversionResult").innerHTML = conversion;
}

function convertFC() {
  fahrenheit = document.getElementById("fahrenheit").value;
  celsius = document.getElementById("celsius").value;
  let conversion = (fahrenheit-32) * 5/9;
  document.getElementById("conversionResult").innerHTML = conversion;
}

//12. Write a JavaScript program to get the website URL (loading page).

function getPage() {
  document.getElementById("pageURL").innerHTML = window.location.href;
}

//13. Write a JavaScript exercise to create a variable using a user-defined name

function createName () {
  let userName = document.getElementById("userName").value;
  document.getElementById("sayHello").innerHTML="Hello " + userName + " how's your day going?";
}

//14. Write a JavaScript exercise to get the extension of a filename.

function getExtension () {
  let fullName = document.getElementById("fileName").value;
  let fileExtension = fullName.split('.').pop();
  document.getElementById("fileExtension").innerHTML = "Extension is " + fileExtension;
}

//15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function getResult() {
  let startValue = document.getElementById("givenNumber").value;
  let valueInt = parseInt(startValue, 10);
  let calcDiff;
  if (valueInt >= 13) {
    calcDiff = (valueInt - 13)*2;
  }

  else {
    calcDiff = 13 - valueInt;
  }
  
  console.log(calcDiff);

  let endValue = calcDiff.toString();

  document.getElementById("diffResult").innerHTML = endValue;
}

//16. Write a JavaScript program to compute the sum of the two given integers. 
//If the two values are same, then returns triple their sum. 

function computeTriple() {
  let a = document.getElementById("integerA").value;
  let b = document.getElementById("integerB").value;
  let aNum = parseInt(a, 10);
  let bNum = parseInt(b, 10);
  let getSum;

  if (aNum == bNum) {
    getSum = (aNum + bNum)* 3;
  }

  else {
    getSum = aNum + bNum;
  }

  let finalSum = getSum.toString();

  document.getElementById("finalSum").innerHTML = finalSum;
}

//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
//Returns triple their absolute difference if the specified number is greater than 19. 

function diffNineteen () {
  let startNumber = document.getElementById("startNumber").value;
  let startInt = parseInt(startNumber, 10);
  let resultNineteen;
  if (startInt >= 19) {
    resultNineteen = (startInt - 19) * 3;
  }

  else {
    resultNineteen = 19 - startInt;
  }

  let nineteenAnswer = resultNineteen.toString();

  document.getElementById("nineteenAnswer").innerHTML = nineteenAnswer;
}

//18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 
//or if their sum is 50.

function findFifty () {
  let a = document.getElementById("qu18numberA").value;
  let b = document.getElementById("qu18numberB").value;
  let numA = parseInt(a, 10);
  let numB = parseInt(b, 10);
  let checkSum = (numA + numB);
  let isFifty;

  if (checkSum == 50 || numA == 50 || numB == 50) {
    isFifty = "true";
  }

  else {
    isFifty = "nope!"
  }

  document.getElementById("resultIsFifty").innerHTML=isFifty;
}

//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 

function enterNumber () {
  let startInt = prompt("Give me a number","");
  let convertInt = parseInt(startInt);
    function withinTwenty (){
    let resultTwenty = (Math.abs(100 - convertInt) <= 20) || (Math.abs(400 - convertInt) <= 20);
    let outputTwenty = resultTwenty.toString();
    document.getElementById("withinTwenty").innerHTML = outputTwenty;
    }
  withinTwenty();
}
  
//20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function checkPolarity () {
  let startA = document.getElementById("numberOne").value;
  let startB = document.getElementById("numberTwo").value;
  let a = parseInt(startA, 10);
  let b = parseInt(startB, 10);
  let checkNumbers;

  if ((a < 0 && b > 0) || (b < 0 && a > 0)){
    checkNumbers = true;
  }

  else {
    checkNumbers = false;
  }

  let checkResult = checkNumbers.toString();
  document.getElementById("checkResult").innerHTML = checkResult;
  console.log(checkNumbers);
}


