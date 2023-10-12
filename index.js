const btnElement = document.querySelector(".btn");
const inputElement = document.getElementById("input");

const sliderInputElement = document.getElementById("length");
const sliderOutputElement = document.getElementById("slider-value");

const copyBtnElement = document.getElementById("copy-btn");
const clearBtnElement = document.getElementById("clear-btn");

// for the slider value
sliderOutputElement.textContent = sliderInputElement.value;

sliderInputElement.addEventListener("input", (e) => {
  e.preventDefault();
  sliderOutputElement.textContent = e.target.value;
});

btnElement.addEventListener("click", () => {
  generatePassword();
});

copyBtnElement.addEventListener("click", () => {
  copyPassword();
});

clearBtnElement.addEventListener("click", () => {
  clearInput();
});

function generatePassword() {
  const chars =
    "abcdefghijklmnopqrstuvwxtz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%";
  const passwordLength = sliderOutputElement.value;
  let password = "";

  for (let index = 0; index < passwordLength; index++) {
    randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    // console.log(randomNum, chars.substring(randomNum, randomNum + 1));
  }

  inputElement.value = password;
}

function copyPassword() {
  inputElement.select();
  inputElement.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputElement.value);
  alert(`${inputElement.value} ::: has been copied.Please paste as needed`);
}

function clearInput() {
  if (inputElement.value !== "") {
    inputElement.value = "";
  }
}
