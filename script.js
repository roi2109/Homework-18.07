const cards = document.querySelector(".box");
let cardTitle = document.querySelector(".card-title");
const nameInputValue = document.getElementById("name");
const ageInputValue = document.getElementById("age");
const countryInputValue = document.getElementById("country");
const genderInputValue = document.querySelectorAll(".gender");
console.log(ageInputValue);
const userAge = document.querySelector(".item1");
const userCountry = document.querySelector(".item2");
const userGender = document.querySelector(".item3");

function showUserInfoCard() {
  let card = document.querySelector(".card");
  cards.appendChild(card);
  card.classList.remove("d-none");
  const userColor = document.getElementById("color-input").value;
  card.style.backgroundColor = userColor;

  userCountry.innerHTML = countryInputValue.value;
  for (let i = 0; i < genderInputValue.length; i++) {
    let currentGender = genderInputValue[i];
    if (currentGender.checked) {
      let chosenGender = currentGender.value;
      userGender.innerHTML = chosenGender;
    }
  }

  if (ageInputValue.value <= 3) {
    alert("you are too young");
  } else {
    userAge.innerHTML = ageInputValue.value;
  }
  if (nameInputValue.value.length < 2) {
    alert("invalid name!");
  } else {
    cardTitle.innerHTML = nameInputValue.value;
  }
}
