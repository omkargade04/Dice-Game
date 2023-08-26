// ANGELINA'S LOGIC :

//-------------------------------------------------------------------------------

// let randomNum1 = Math.floor(Math.random() * 6) + 1;
// let randomDiceImage1 = "dice" + randomNum1 + ".png";
// let randomImage1 = randomDiceImage1;

// let image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImage1);
// // console.log(display1);


// let randomNum2 = Math.floor(Math.random() * 6) + 1;
// let randomDiceImage2 = "dice" + randomNum2 + ".png";
// let randomImage2 = randomDiceImage2;

// let image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImage2);
// // console.log(display2);

// if(randomNum1 > randomNum2){
//     const title = document.getElementById("title").innerHTML = "Player 1 Wins";
// }
// else if(randomNum1 == randomNum2){
//     const title = document.getElementById("title").innerHTML = "Its a Tie";
// }
// else{
//     const title = document.getElementById("title").innerHTML = "Player 2 Wins";
// }

//---------------------------------------------------------------------------------

//MY LOGIC :

let randomNum1 = Math.floor(Math.random() * 6) + 1;

if(randomNum1 == 1){
    document.querySelectorAll("img")[0].setAttribute("src", "dice1.png")
}
else if(randomNum1 == 2){
    document.querySelectorAll("img")[0].setAttribute("src", "dice2.png")
}
else if(randomNum1 == 3){
    document.querySelectorAll("img")[0].setAttribute("src", "dice3.png")
}
else if(randomNum1 == 4){
    document.querySelectorAll("img")[0].setAttribute("src", "dice4.png")
}
else if(randomNum1 == 5){
    document.querySelectorAll("img")[0].setAttribute("src", "dice5.png")
}
else if(randomNum1 == 6){
    document.querySelectorAll("img")[0].setAttribute("src", "dice6.png")
}

let randomNum2 = Math.floor(Math.random() * 6) + 1;

if(randomNum2 == 1){
    document.querySelectorAll("img")[1].setAttribute("src", "dice1.png")
}
else if(randomNum2 == 2){
    document.querySelectorAll("img")[1].setAttribute("src", "dice2.png")
}
else if(randomNum2 == 3){
    document.querySelectorAll("img")[1].setAttribute("src", "dice3.png")
}
else if(randomNum2 == 4){
    document.querySelectorAll("img")[1].setAttribute("src", "dice4.png")
}
else if(randomNum2 == 5){
    document.querySelectorAll("img")[1].setAttribute("src", "dice5.png")
}
else if(randomNum2 == 6){
    document.querySelectorAll("img")[1].setAttribute("src", "dice6.png")
}

if(randomNum1 > randomNum2){
    document.getElementById("title").innerHTML = "Player 1 Wins";
}
else if(randomNum1 == randomNum2){
    document.getElementById("title").innerHTML = "Its a Tie";
}
else{
    document.getElementById("title").innerHTML = "Player 2 Wins";
}

//------------------------------------------------------------------------------