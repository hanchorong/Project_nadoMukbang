const email = document.querySelector("#userMail");
const password = document.querySelector("#userPassword");
const loginForm = document.querySelector("#loginform");

const USEREINFO_EMAIL = "userMail";
const USEREINFO_PASS = "userPass";

const storageEmail = localStorage.getItem(USEREINFO_EMAIL);
const storagePass = localStorage.getItem(USEREINFO_PASS);

function onLogin(e) {
  e.preventDefault();
  if (email.value == storageEmail && password.value == storagePass) {
    window.location.replace("/");
    localStorage.setItem("login", true);
  } else {
    alert("이메일 또는 비밀번호가 일치하지 않습니다.");
  }
}

loginForm.addEventListener("submit", onLogin);
