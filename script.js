let root = document.getElementById("root");

let header = document.createElement("header");

let logo = document.createElement("h1");
logo.innerText = "Logga in";
logo.classList.add("logo");

header.appendChild(logo);
root.appendChild(header);

let main = document.createElement("main");

root.appendChild(main);

    let userName = document.createElement("input");
    userName.type = "text";
    userName.id = "username"
    userName.placeholder = "Username";

root.appendChild(userName);

let div = document.createElement("div");

root.appendChild(div);

    let password = document.createElement("input");
    password.type = "text";
    password.id = "password"
    password.placeholder = "Password";

root.appendChild(password);

let div1 = document.createElement("div");
root.appendChild(div1);

    let loginBtn = document.createElement("button");
    loginBtn.type = "button";
    loginBtn.innerText ="Logga in"

root.appendChild(loginBtn);    