const newCardForm = document.querySelector('[data-js="newCardForm"]');

//Event listener für das Formular
newCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  document.querySelector("main").append(createCard(data));
});

// Fragen - Kärtchen - Erstellfunktion;
function createCard(data) {
  //Card List creation
  const cardList = document.createElement("ul");
  cardList.classList.add("card-list");

  //Card List Entry creation
  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");

  //Card creation
  const card = document.createElement("article");
  card.classList.add("card");

  //Question creation
  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = data.question;

  //Show and Hide Button creation
  const showHideAnswerButton = document.createElement("button");
  showHideAnswerButton.classList.add("card__button-answer");
  showHideAnswerButton.type = "button";
  showHideAnswerButton.setAttribute("data-js", "showHideAnswerButton");
  showHideAnswerButton.textContent = "Show answer";

  //Answer creation
  const answer = document.createElement("p");
  answer.classList.add("card__answer");
  answer.setAttribute("data-js", "answerText");
  answer.textContent = data.answer;

  //Tag list creation
  const cardTagList = document.createElement("ul");
  cardTagList.classList.add("card__tag-list");

  //Tag entry creation
  const cardTag = document.createElement("li");
  cardTag.classList.add("card__tag-list-item");
  cardTag.textContent = "#" + data.tags;

  //Put everything together
  cardTagList.append(cardTag);
  card.append(cardQuestion);
  card.append(showHideAnswerButton);
  card.append(answer);
  card.append(cardTagList);

  cardListItem.append(card);
  cardList.append(cardListItem);

  return cardList;
}
