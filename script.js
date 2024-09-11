const correctUser = "test"
const correctPassword = "1234"

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
    loginBtn.innerText = "Logga in";
    loginBtn.id = "loginBtn";

root.appendChild(loginBtn);    

loginBtn.addEventListener("click", function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === correctUser && password === correctPassword) {
        
        root.innerHTML = "";

        const welcome = document.createElement("h3");
        welcome.textContent = "Välkommen!";
        root.appendChild(welcome);

        let logoutBtn = document.createElement("button");
        logoutBtn.type = "button";
        logoutBtn.innerText = "Logga ut";        
        logoutBtn.id = "logoutBtn";

        root.appendChild(logoutBtn);    

        }

});