let count = 0;

const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");
const increaseButton = document.getElementById("increaseBtn");
const counterLabel = document.getElementById("counterLabel");

decreaseButton.addEventListener("click", () => {
     count--;
     counterLabel.innerHTML = count;
});

resetButton.addEventListener("click", () => {
     count = 0;
     counterLabel.innerHTML = count;
});

increaseButton.addEventListener("click", () => {
     count++;
     counterLabel.innerHTML = count;
});