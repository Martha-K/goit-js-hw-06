function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  pageBackground: document.querySelector(".widget"),
  nameColor: document.querySelector(".color"),
  colorChangeButton: document.querySelector(".change-color"),
};

refs.colorChangeButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const backgroundColor = getRandomHexColor();
  refs.pageBackground.style.backgroundColor = backgroundColor;
  refs.nameColor.textContent = backgroundColor;
}
