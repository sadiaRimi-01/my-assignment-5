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













var copyButtons = document.getElementsByClassName("copy-btn");
var copyCount = document.getElementById("CopyBtn");
var count = parseInt(copyCount.textContent) || 0;

for (var i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    // Find the closest card parent
    var card = this.closest(".card");
    if (!card) return;

    // Get the hotline number inside the card
    var numberElem = card.getElementsByClassName("hotline-number")[0];
    if (!numberElem) return;

    var number = numberElem.textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(number).then(function () {
      count++;
      copyCount.textContent = count;
      alert("Copied: " + number);
    });
  });
}


