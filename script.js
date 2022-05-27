const form = document.querySelector("form");
let userInput = document.querySelector("#userInput");
let computerInput = document.querySelector("#computerInput");
let h1 = document.querySelector("h1");
let p = document.createElement('p');
form.append(p);

userInput.addEventListener("change", (evt) => {
    userInput.value = userInput.value.toUpperCase();
    if (userInput.value != "ROCK" || userInput.value != "PAPER" || userInput.value != "SCISSORS") {
        alert("Please enter rock, paper or scissors only!");
        userInput.value = "";
    }
})

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (userInput.value != "") {
        findwinner(form.userInput.value);
    }
    else alert("You can't win without a weapon!");
});
computerInput.addEventListener("change", () => alert("Nice try cheater!"));

const findwinner = (u) => {
    computerInput.value = findInput();
    if (u == computerInput.value) p.innerText = "It's a tie";
    else if (u == 'ROCK' && computerInput.value == "PAPER" || u == 'PAPER' && computerInput.value == "SCISSORS" || u == 'SCISSORS' && computerInput.value == "ROCK") p.innerText = "You Lose :(";
    else p.innerText = "You Win :)";

}

const findInput = () => {
    let temp = Math.floor(Math.random() * 3);
    switch (temp) {
        case 0:
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return "SCISSORS";
            break;
        default:
            break;
    }
}
