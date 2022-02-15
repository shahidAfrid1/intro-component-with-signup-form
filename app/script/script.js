let form = document.querySelector("form");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let fnmsg = document.querySelector(".fnmsg");
let lnmsg = document.querySelector(".lnmsg");
let emsg = document.querySelector(".emsg");
let psmsg = document.querySelector(".psmsg");

form.addEventListener("submit", (e) => {
  if (!cheackName(firstName.value)) {
    firstName.classList.add("error");
    fnmsg.classList.add("active");
    e.preventDefault();
  }
  if (!cheackName(lastName.value)) {
    lastName.classList.add("error");
    lnmsg.classList.add("active");
    e.preventDefault();
  }
  if (!cheackEmail(email.value)) {
    email.classList.add("error");
    emsg.classList.add("active");
    e.preventDefault();
  }
  if (cheackName(password.value)<8) {
    password.classList.add("error");
    psmsg.classList.add("active");
    e.preventDefault();
  }
});

function cheackName(value) {
  if (value.length <= 0) {
    return false;
  }
  return true;
}

function cheackEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
    return true;
  }

  return false;
}

function cheackPassword(pass) {
  if (pass.length <= 7) {
    return pass.length;
  }
  return true;
}

setInterval(() => {
  if (cheackName(firstName.value)) {
    firstName.classList.remove("error");
    fnmsg.classList.remove("active");
    clearInterval();
  }
  if (cheackName(lastName.value)) {
    lastName.classList.remove("error");
    lnmsg.classList.remove("active");
    clearInterval();
  }
  if (cheackEmail(email.value)) {
    email.classList.remove("error");
    emsg.classList.remove("active");
    clearInterval();
  }
  if (cheackName(password.value)) {
    password.classList.remove("error");
    psmsg.classList.remove("active");
    clearInterval();
  }
}, 1);
