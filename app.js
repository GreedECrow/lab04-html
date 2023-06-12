let userName = prompt("Hi User :) Please tell me your name!")
console.log(userName);

if (confirm("Did you say " + userName)){
    const welcomeMsg = alert("Welcome to my page " + userName);
}else {const welcomeMsg = alert("Hello Stranger");
}


function changeColor(colorName) {
    document.body.style.background = colorName;
}




function yourName(){
    let user = prompt("What is your name?");
    return document.write(user);
}


function timeOfDay(){
    let time = prompt("what hour is it? 0-23");
    let location = prompt("What country are you in?");
    let message ="";

    if (time <= 11 && location === "england"){
        message = "Good Morning ";
    } else if (time <= 18 && location === "england"){
        message = "Good Afternoon ";
    } else if (time <=24 && location === "england"){
        message = "Good Night" ;
    } else {
        message = "Thats not a time!";
    }


    return document.write(message);
}

//Working clock

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

//Guess the number

let answer

while (answer != 7) {
    answer = prompt("guess a number between 1 and 10")
    if (answer != 7){
        alert("try again");
    }else{
        alert("Congratulations")
    }
}

//Ratings

function displayRating(){
    let output ="";
    let rating = prompt ("on a scale of 1 - 5");
    for (let i = 0; i< rating; i++);
        output += i;
}
return document.write(output);