let countEl = document.getElementById("count-el");
let showNumber = document.getElementById("show-number");
let count = 0;


function incrementNumber() {
    count += 1;
    countEl.textContent = count;
}

function decrementNumber() {
    count -= 1;
    countEl.textContent = count;
}

function saveNumber() {
    countedPeople = " " + count + " -";
    showNumber.textContent += countedPeople;
    countEl.textContent = 0;
    count = 0;
}
