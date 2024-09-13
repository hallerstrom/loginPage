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

function loginForm(){

    main.innerHTML = "";

    let userName = document.createElement("input");
    userName.type = "text";
    userName.id = "username"
    userName.placeholder = "Username";
    main.appendChild(userName);

let div = document.createElement("div");
main.appendChild(div);

    let password = document.createElement("input");
    password.type = "text";
    password.id = "password"
    password.placeholder = "Password";
    main.appendChild(password);

let div1 = document.createElement("div");
main.appendChild(div1);

    let loginBtn = document.createElement("button");
    loginBtn.type = "button";
    loginBtn.innerText = "Logga in";
    loginBtn.id = "loginBtn";
    main.appendChild(loginBtn);    

loginBtn.addEventListener("click", function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === correctUser && password === correctPassword) {

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        
        main.innerHTML = "";
        header.innerHTML ="";
  
       welcomeUser();

        } else {

            root.innerHTML ="";

            let wrong = document.createElement("h3");
            wrong.innerText = "Något blev fel!";
            root.appendChild(wrong);
        }
       
    });
};

function welcomeUser(){

        main.innerHTML=""

        const welcomeUser = document.createElement("h3");
        welcomeUser.textContent = "Välkommen!";
        main.appendChild(welcomeUser);

        let logoutBtn = document.createElement("button");
        logoutBtn.type = "button";
        logoutBtn.innerText = "Logga ut";        
        logoutBtn.id = "logoutBtn";
        
        main.appendChild(logoutBtn);

        logoutBtn.addEventListener("click", function () {

            localStorage.removeItem("username");
            localStorage.removeItem("password");

            header.appendChild(logo);            
            loginForm();
        });
}    
function checkUser(){
    const loggedIn = localStorage.getItem("username");
    if (loggedIn){
        header.innerHTML = ""
        welcomeUser();
    } else{
        loginForm();
    }
}

checkUser();
