function signup(){
    window.location.href = "sign-up.html";
}

function darkMode(){
    var body = document.lastElementChild.firstElementChild.nextElementSibling;
    body.style.background = "black";
    body.firstElementChild.style.color = "white";
    body.firstElementChild.style.border = "1px solid white";
    body.firstElementChild.style.background= "linear-gradient(135deg, #71b7e6, #9b59b6)";
    var dark = document.getElementById("dark")
    dark.style.display = "none";
    var light = document.getElementById("light");
    light.style.display = "";
}

function lightMode(){
    var body = document.lastElementChild.firstElementChild.nextElementSibling;
    body.style.background = "";
    body.firstElementChild.style.color = "";
    body.firstElementChild.style.border = "";
    body.firstElementChild.style.background= "";
    var dark = document.getElementById("dark")
    dark.style.display = "";
    var light = document.getElementById("light");
    light.style.display = "none";
}


function login(){
    window.location.href = "index.html";
}