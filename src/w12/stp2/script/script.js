console.log("안녕하세요?");
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.5, 0.05, 0)";

let aCard = document.querySelector(".card");
console.log(aCard);
aCard.addEventListener("click", function () {
  console.log("클릭!");
  // aCard.style.backgroundColor = "#ff0000";
  console.log(aCard.classList);
  aCard.classList.toggle("card--state-clicked");
});
// addEventListener(이벤트 종류 , {할일})

// document.querySelectorAll('.card')
// class 이름이 card 인 애를 가지고옴
