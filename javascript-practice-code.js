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

function calcResult(){
  let a = document.getElementById("inputA");
  let b = document.getElementById("inputB");
  let multiply = document.getElementById("multiply");
  let divide = document.getElementById("divide");
  

  if (multiply) {
    return (a*b);
  }

  if (divide) {
    return (a/b);
  }
}

calcResult();