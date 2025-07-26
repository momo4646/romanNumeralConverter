const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputText = document.getElementById("output");

const romanNumerals = [
  { decimal: 1000, roman: "M"},
  { decimal: 900, roman: "CM"},
  { decimal: 500, roman: "D"},
  { decimal: 400, roman: "CD"},
  { decimal: 100, roman: "C"},
  { decimal: 90, roman: "XC"},
  { decimal: 50, roman: "L"},
  { decimal: 40, roman: "XL"},
  { decimal: 10, roman: "X"},
  { decimal: 9, roman: "IX"},
  { decimal: 5, roman: "V"},
  { decimal: 4, roman: "IV"},
  { decimal: 1, roman: "I"}
]


const updateResults = (message) => {
  output.style.display = "flex";
  outputText.innerText = message;
  return;
}


const decimalToRoman = (input) => {
  let romanString = "";
  romanNumerals.forEach(({decimal, roman}) => {
    let quotient = Math.floor(input / decimal);
    if (quotient) {
      romanString += roman.repeat(quotient);
      input -= decimal * quotient;
    }
  })
  return romanString;
}


const checkInput = () => {
  const intInput = number.value;

  if (!number.value.match(/^-?[0-9]/) || number.value === "") {
    updateResults("Please enter a valid number");
  } else if (intInput < 1) {
    updateResults("Please enter a number greater than or equal to 1");
  } else if (intInput > 3999) {
    updateResults("Please enter a number less than or equal to 3999");
  } else {
    updateResults(decimalToRoman(intInput));
  }
  return;
}

output.style.display = "none";
convertBtn.addEventListener("click", checkInput);

