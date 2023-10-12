const btnElement = document.querySelector(".btn");
const inputElement = document.getElementById("input");

const copyBtnElement = document.getElementById("copy-btn");

btnElement.addEventListener("click", () => {
  generatePassword();
});

copyBtnElement.addEventListener("click", () => {
  copyPassword();
});
function generatePassword() {
  const chars =
    "abcdefghijklmnopqrstuvwxtz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%";
  const passwordLength = 8;
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
