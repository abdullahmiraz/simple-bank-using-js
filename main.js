document.getElementById("login-btn").addEventListener("click", function () {
  const loginEmail = document.getElementById("login-email").value;

  const loginPass = document.getElementById("login-pass").value;

  if (loginEmail === "miraz@gmail.com" && loginPass === "miraz123") {
    window.location.href = "./bank.html";
  } else {
    alert("invalid credentials");
  }
});
