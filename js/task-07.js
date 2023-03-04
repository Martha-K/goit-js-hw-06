const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", changingPositionSlider);

function changingPositionSlider(event) {
  const sliderPosition = event.target.value;
  refs.span.style.fontSize = `${sliderPosition}px`;
}
