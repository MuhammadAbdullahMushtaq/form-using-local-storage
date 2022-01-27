let signUp = () => {
    window.location.href = "sign-up.html";
}

const userName = document.getElementById("userName")
const fullName = document.getElementById("fullName")
const phoneNumber = document.getElementById("phoneNumber")
const address = document.getElementById("address")
const email = document.getElementById("email")
const password = document.getElementById("password")


const createAccount = () => {
    if(userName.value.length >= 3 && fullName.value.length >= 3 && phoneNumber.value.length >= 11 && address.value.length >= 5 && email.value.length >= 5 && password.value.length >= 8 ){
        const userObj = {
            userName: userName.value,
            fullName: fullName.value,
            phoneNumber: phoneNumber.value,
            address: address.value,
            email: email.value,
            password: password.value,
        }

        const user = JSON.parse(localStorage.getItem("users")) || []
        console.log(user)

        const userIndex = user.findIndex((value) => {
            return value.email === userObj.email
        })
        console.log(userIndex);
        if (userIndex === -1) {
            user.push(userObj);
            console.log("sshjg");
            localStorage.setItem("users", JSON.stringify(user));
            alert("Account is Created Successfully.");
            window.location.href = "index.html";
        }
        else{
            alert("Email Already Exists.")
        }
    }
    else{
        if (userName.value.length < 3){
            alert("Enter a User Name of Atleast 3 Characters.")
        }
        else if (fullName.value.length < 3){
            alert("Enter a Full Name Of Atleast 3 Characters.")
        }
        else if (email.value.length < 5){
            alert("Enter a Valid Email.")
        }
        else if (phoneNumber.value.length < 11){
        alert("Enter a Valid Phone Number.")
        }
        else if(password.value.length < 8){
            alert("Password Should Be of 8 Characters.")
        }
        else{
            alert("Enter a Proper Address.")
        }
    }
}

const profile = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const userData = JSON.parse(localStorage.getItem("users"))
    console.log(userData)
    const checkUser = userData.find((value) => {
        return value.email === email.value && value.password === password.value
    })

    console.log(checkUser);
    if(checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        window.location.assign("dashboard.html")
    }
    else{
        alert("Enter Correct Credientals.")
    }
}

let details = () =>{
    const Address = document.getElementById("Address")
    const email = document.getElementById("email")
    const fullname = document.getElementById("fullname")
    const password = document.getElementById("password")
    const phonenumber = document.getElementById("phonenumber")
    const username = document.getElementById("username")
    const obj = JSON.parse(localStorage.getItem("currentUser"))
    console.log(obj);
    Address.value = obj.address
    email.value = obj.email
    fullname.value = obj.fullName
    password.value = obj.password
    phonenumber.value = obj.phoneNumber
    username.value = obj.userName
    }

let logOut = () => {
    window.location.replace("index.html")
    localStorage.removeItem("currentUser");
}

let login = () => {
    window.location.href = "index.html";
}

let darkMode = () => {
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

let lightMode = () => {
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


let toggler = () =>{
    const password = document.getElementById("password");
    const toggle = document.getElementById("toggle");
    if(password.type == "password"){
            toggle.innerHTML = "Hide Password"
            password.type = "text";
    }
    else{
        toggle.innerHTML = "Show Password"
        password.type = "password";
    }
    }