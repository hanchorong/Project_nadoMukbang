const signupForm = document.querySelector("#signupForm");
const email = document.querySelector("#userEmail");
const emailCheck = document.querySelector("#userEmailCheckBtn");
const passInput = document.querySelector(".test");
const password = document.querySelector("#userPassword");
const passwordConfirm = document.querySelector("#userPasswordConfirm");
const passwordVMessage = document.querySelector("#userPassword+span");
const passwordCMessage = document.querySelector("#userPasswordConfirm+span");

const USEREINFO_EMAIL = "userMail";
const USEREINFO_PASS = "userPass";

const REGPASSSWORD =
  /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,20}$/;
const REGEMAIL = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

let emailBtnCheck;

function onEmailCheck(e) {
  e.preventDefault();
  const storageEmail = localStorage.getItem(USEREINFO_EMAIL);
  if (storageEmail === email.value) {
    alert("중복된 이메일입니다.");
    emailBtnCheck = false;
  } else if (REGEMAIL.test(email.value)) {
    alert("유효한 이메일입니다.");
    emailBtnCheck = true;
    email.disabled = true;
  } else {
    alert("유효하지 않은 이메일입니다.");
    emailBtnCheck = false;
  }
}

console.log(emailBtnCheck);
function passwordCheck() {
  if (REGPASSSWORD.test(password.value)) {
    passwordVMessage.innerText = "유효한 비밀번호 입니다.";
    passwordVMessage.classList.remove("error");
    passwordVMessage.classList.add("valid");
    passConfirm();
  } else {
    passwordVMessage.innerText = "8~20자 문자,숫자,특수문자 포함입니다";
    passwordVMessage.classList.remove("valid");
    passwordVMessage.classList.add("error");
    passConfirm();
  }
}

function passConfirm() {
  if (password.value === passwordConfirm.value) {
    passwordCMessage.innerText = "비밀번호가 일치합니다.";
    passwordCMessage.classList.remove("error");
    passwordCMessage.classList.add("valid");
    return true;
  } else {
    passwordCMessage.innerText = "비밀번호가 일치하지 않습니다.";
    passwordCMessage.classList.remove("valid");
    passwordCMessage.classList.add("error");
  }
}
password.addEventListener("keyup", passwordCheck);
passwordConfirm.addEventListener("keyup", passConfirm);

function onSignup(e) {
  e.preventDefault();
  if (emailBtnCheck === true && passConfirm() === true) {
    localStorage.setItem(USEREINFO_EMAIL, email.value);
    localStorage.setItem(USEREINFO_PASS, password.value);
    alert("회원가입 완료!");
    window.location.replace("/login");
  }
}

emailCheck.addEventListener("click", onEmailCheck);
signupForm.addEventListener("submit", onSignup);
