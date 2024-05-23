let elemBody = document.body;
elemBody.style.backgroundColor = "#0000ff";
// let aCard = document.querySelector(".card");
// aCard.addEventListener("click", function () {
//   console.log("클릭!");
//   console.log(aCard.classList);
//   aCard.classList.toggle("card--state-clicked");
// });
let cards = document.querySelectorAll(".card");
// card에 해당하는 모든 div를 불러옴
console.log(cards);
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.addEventListener("click", function () {
    eachCard.classList.toggle("card--state-clicked");
  });
}
