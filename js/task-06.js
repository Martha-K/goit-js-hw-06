const input = document.querySelector("#validation-input");

input.addEventListener("blur", checkingNumberCharacters);

function checkingNumberCharacters() {
  const classList = input.classList;
  const value = classList.value;
  const dataLength = Number(input.getAttribute("data-length"));

  if (input.value.length === dataLength) {
    value ? classList.replace(value, "valid") : classList.add("valid");
  } else {
    value ? classList.replace(value, "invalid") : classList.add("invalid");
  }
}
