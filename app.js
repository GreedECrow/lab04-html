let userName = prompt("Hi User :) Please tell me your name!")
console.log(userName);

if (confirm("Did you say " + userName)){
    const welcomeMsg = alert("Welcome to my page " + userName);
}else {const welcomeMsg = alert("Hello Stranger");
}


function changeColor(colorName) {
    document.body.style.background = colorName;
}