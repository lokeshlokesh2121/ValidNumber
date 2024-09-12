let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*10);
console.log(randomNumber);
function checkGuess() {
    let guessnumber=parseInt(userInput.value);
    if (guessnumber>randomNumber){
        gameResult.textContent="To high! try again";
        gameResult.style.backgroundColor="#1e217c";
    }
    else if (guessnumber<randomNumber){
        gameResult.textContent="To low! try again";
        gameResult.style.backgroundColor="red";
    }
    else if (guessnumber===randomNumber){
        gameResult.textContent="Congrats";
        gameResult.style.backgroundColor="green";
    }
    else{
        gameResult.textContent="provide a valid number";
        gameResult.style.backgroundColor="orange";
    }
 
}