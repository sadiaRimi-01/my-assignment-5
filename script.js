// love count

let count1 = 0;
const favCount = document.getElementById("heart-count");
const hearts = document.querySelectorAll(".btn-circle");

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    count1++;
    favCount.textContent = count1;
  });
});


// copy section
const copyButtons = document.getElementsByClassName("copy-btn");
const copyCount = document.getElementById("CopyBtn");
let count = parseInt(copyCount.textContent) || 0;

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const card = this.closest(".card");
    if (!card) return;
    const numberElem = card.getElementsByClassName("hotline-number")[0];
    if (!numberElem) return;

    const number = numberElem.textContent;
    navigator.clipboard.writeText(number).then(function () {
      count++;
      copyCount.textContent = count;
      alert("Copied: " + number);
    });
  });
}



// call buuton and clear history

const coinBtn = document.getElementById("coin-btn");
const callBtns = document.getElementsByClassName("call-btn");
const historyBox = document.getElementById("clear-fild");
const clearBtn = document.getElementById("clear-btn");
for (let i = 0; i < callBtns.length; i++) {
  callBtns[i].addEventListener("click", function () {
    let coins = parseInt(coinBtn.textContent);

    if (coins < 20) {
      alert("Not enough coins! Need at least 20.");
      return;
    }

    const card = this.closest(".card");
    const serviceName = card.querySelector(".service-name").textContent;
    const serviceNumber = card.querySelector(".hotline-number").textContent;

    alert(`Calling ${serviceName} (${serviceNumber})`);

    coinBtn.textContent = coins - 20;

    const now = new Date().toLocaleTimeString();

    const entry = document.createElement("div");
    entry.className =
      "flex justify-between items-center bg-white px-3 py-2 mb-2 rounded-xl shadow-sm";

    entry.innerHTML = `
      <div class="flex flex-col">
        <p class="font-semibold text-sm text-gray-900">${serviceName}</p>
        <p class="text-xs text-gray-500">${serviceNumber}</p>
      </div>
      <div class="text-xs text-gray-600">${now}</div>
    `;

    historyBox.appendChild(entry);
  });
}

clearBtn.addEventListener("click", function () {
  historyBox.innerHTML = "";
});




