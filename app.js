function passwordGenerate(length, upperCase, lowerCase, number, symbol) {
  const upperCasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCasechars = "abcdefghijklmnopqrstuvwxyz";
  const numberchars = "0123456789";
  const symbolchars = "!@#$%^&*()";

  let allowchars = "";
  let password = "";

  allowchars = allowchars + upperCase ? upperCasechars : "";
  allowchars += lowerCase ? lowerCasechars : " ";
  allowchars += number ? numberchars : "";
  allowchars += symbol ? symbolchars : "";

  if (length <= 0 && allowchars.length == 0)
    return `must be used one charecter`;

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * allowchars.length);
    password += allowchars[randomNumber];
  }
  return password;
}
const passwordLength = 8;
const upperCase = true;
const lowerCase = true;
const numbers = true;
const symbols = false;

const password = passwordGenerate(
  passwordLength,
  upperCase,
  lowerCase,
  numbers,
  symbols
);
console.log(`password -> ${password}`);
