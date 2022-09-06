/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const output = document.getElementById("output");
const showBtn = document.getElementById("btn");

showBtn.addEventListener("click", () => {
  output.innerHTML = null;

  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((userInfo) => {
        // adding elements
        const userInfoDiv = document.createElement("div");
        const loginInfo = document.createElement("span");
        const avatarInfo = document.createElement("img");

        // adding attribue
        avatarInfo.setAttribute("src", `${userInfo.avatar_url}`);

        // adding innerText
        loginInfo.innerHTML = ` Username: ${userInfo.login} </br>`;

        // adding styles
        userInfoDiv.style.border = "1px solid black";
        userInfoDiv.style.textAlign = "center";
        avatarInfo.style.maxWidth = "300px";
        loginInfo.style.fontSize = "50px";

        // appening
        userInfoDiv.append(loginInfo, avatarInfo);
        output.append(userInfoDiv);
      });
    });
});
