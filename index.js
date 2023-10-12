const btnElement = document.querySelector(".btn");
const inputElement = document.getElementById("input");

btnElement.addEventListener("click", () => {
  generatePassword();
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
