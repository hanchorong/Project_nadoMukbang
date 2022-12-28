const login = document.querySelector("#login");
const logOut = document.querySelector("#logOut");

const logState = localStorage.getItem("login");

if (logState == "true") {
  login.classList.add("none");
  logOut.classList.remove("none");
} else {
  login.classList.remove("none");
  logOut.classList.add("none");
}

function onLogout() {
  localStorage.setItem("login", false);

  login.classList.remove("none");
  logOut.classList.add("none");

  window.location.replace("/");
}

logOut.addEventListener("click", onLogout);
