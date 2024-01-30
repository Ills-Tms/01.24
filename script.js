const gomb = document.querySelector("#gomb");
const emailinput = document.querySelector("#email");

gomb.addEventListener("click", function () {
  console.log(emailinput.validity.patternMismatch);
  if (!emailinput.validity.patternMismatch) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
});
