/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let submitBtn = document.getElementById("submit-btn");
let outputValue = document.getElementById("output");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = document.getElementById("search").value;

  if (isNaN(userInput)) {
    alert("please enter a valid number");
  } else {
    let lbValue = userInput * 2.2046;
    let gValue = userInput / 0.001;
    let ozValue = userInput * 35.274;
    console.log(userInput);
    outputValue.innerHTML = `${lbValue} lb </br>${gValue} g </br>${ozValue} oz </br>`;

    // adding styles to the output
    const style = document.createElement("style");

    style.innerHTML = ` 
  #output {
    background-color: white;
    width: 20%;
    margin-left: 30rem;
    padding: 3rem;
    font-size: 2em;
  }
  `;
    document.head.appendChild(style);
  }
});
