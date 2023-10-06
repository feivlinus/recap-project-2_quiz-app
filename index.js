// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('[data-js="bookmarkCardButton"]');
const showHideAnswerButton = document.querySelector(
  '[data-js="showHideAnswerButton"]'
);
const answerText = document.querySelector('[data-js="answerText"]');

//Toggle the bookmark Button
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

showHideAnswerButton.addEventListener("click", () => {
  answerText.classList.toggle("card__answer--active");
  if (answerText.classList.contains("card__answer--active")) {
    showHideAnswerButton.textContent = "Hide answer";
  } else {
    showHideAnswerButton.textContent = "Show answer";
  }
});
