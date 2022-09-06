/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const output = document.getElementById("output");

import myJson from "./cars.json" assert { type: "json" };
console.log(myJson);

myJson.forEach((carInfo) => {
  // adding elements
  const cars = document.createElement("div");
  const brands = document.createElement("div");
  const models = document.createElement("span");

  //   adding classes
  brands.setAttribute("class", "brand");
  models.setAttribute("class", "model");
  cars.setAttribute("class", "cars");

  //innerText
  brands.innerText = `${carInfo.brand}`;
  models.innerHTML = `${carInfo.models}`;

  //   append
  cars.append(brands, models);
  output.append(cars);
});
