let elemBody = document.body;
elemBody.style.backgroundColor = "#00ff00";
let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.addEventListener("click", function () {
    container.dataset.selected = "엄마 저 몇째에요~!";
  });
}
