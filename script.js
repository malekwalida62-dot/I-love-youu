function login() {
  const pass = document.getElementById("password").value;
  if (pass === "love") {
    goTo(2);
  } else {
    document.getElementById("error").innerText = "كلمة السر غلط";
  }
}

function goTo(page) {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("page" + i).classList.add("hidden");
  }
  document.getElementById("page" + page).classList.remove("hidden");
}

function restart() {
  location.reload();
}
