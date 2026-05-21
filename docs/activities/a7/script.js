// COLOR CHANGER (Click Event)
// Select button and body
const colorBtn = document.getElementById("colorBtn");
const body = document.body;
// When button is clicked, toggle dark mode
colorBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
});

// QUIZ (Click + Input Event)
// Select elements
const input = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
// When button is clicked
submitBtn.addEventListener("click", function () {
    const answer = input.value.toLowerCase();

    if (answer === "pizza") {
        result.textContent = "🍕 Correct! Pizza is very oishi!";
    } else if (answer === "") {
        result.textContent = "⚠️ Please type something!";
    } else {
        result.textContent = "Nice try! It is pizza tho!";
    }
});

// Keypress event (Enter key)
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        submitBtn.click(); // triggers button click
    }
});

// ANIMATION (setInterval)
// Select elements
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
// When button is clicked
animateBtn.addEventListener("click", function () {
    let position = 0;

    const interval = setInterval(function () {
        position += 5;
        box.style.top = position + "px";

        // Stop animation at 200px
        if (position >= 200) {
            clearInterval(interval);
        }
    }, 20);x``
});