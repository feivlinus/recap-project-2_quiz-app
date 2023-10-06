const newCardForm = document.querySelector('[data-js="newCardForm"]');

//Event listener für das Formular
newCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  //createCard(data);
  document.querySelector("main").append(createCard(data));
});

// Fragen - Kärtchen - Erstellfunktion;
function createCard(data) {
  const cardList = document.createElement("ul");
  cardList.classList.add("card-list");

  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");

  //Card
  const card = document.createElement("article");
  card.classList.add("card");

  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = data.question;

  const showHideAnswerButton = document.createElement("button");
  showHideAnswerButton.classList.add("card__button-answer");
  showHideAnswerButton.type = "button";
  showHideAnswerButton.setAttribute("data-js", "showHideAnswerButton");
  showHideAnswerButton.textContent = "Show answer";

  const answer = document.createElement("p");
  answer.classList.add("card__answer");
  answer.setAttribute("data-js", "answerText");
  answer.textContent = data.answer;

  const cardTagList = document.createElement("ul");
  cardTagList.classList.add("card__tag-list");

  const cardTag = document.createElement("li");
  cardTag.classList.add("card__tag-list-item");
  cardTag.textContent = "#" + data.tags;

  cardTagList.append(cardTag);
  card.append(cardQuestion);
  card.append(showHideAnswerButton);
  card.append(answer);
  card.append(cardTagList);

  cardListItem.append(card);
  cardList.append(cardListItem);

  return cardList;
}
