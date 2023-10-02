const palavradodia = "coisa";
let currentAttempt = 1;
const maxAttempts = 5;

function testFunction() {
    alert("Button clicked!");
}

function makeGuess() {
    const guess = document.getElementById("guessInput").value;
    const guessDisplay = document.getElementById("attempt" + currentAttempt).children;
        
    for (let i = 0; i < guess.length; i++) {
        guessDisplay[i].textContent = guess[i];

        if (guess[i] === palavradodia[i]) {
            guessDisplay[i].classList.add("green");
        } else if (palavradodia.includes(guess[i])) {
            guessDisplay[i].classList.add("yellow");
        }
    }

    if (guess === palavradodia) {
        for (let i = 0; i < palavradodia.length; i++) {
            guessDisplay[i].textContent = palavradodia [i];
        }
        document.getElementById("successModal").style.display = "block";
        return;
    }

    if (currentAttempt === maxAttempts) {
        alert("Suas tentativas acabaram, a palavra era: " + palavradodia);
        resetGame();
        return;
    }

    document.getElementById("attempt" + currentAttempt).classList.add("inactive");
    currentAttempt++;
    document.getElementById("guessInput").value = "";
}

function resetGame() {
    for (let i = 1; i <= maxAttempts; i++) {
        const attempt = document.getElementById("attempt" + i);
        attempt.classList.remove("inactive");
        const spans = attempt.children;
        for (let span of spans) {
            span.textContent = '';
            span.classList.remove('green', 'yellow');
        }
    }
    currentAttempt = 1;
    document.getElementById("guessInput").value = "";
}

document.getElementById("guessInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        makeGuess();
    }
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("successModal").style.display = "none";
    resetGame();
});