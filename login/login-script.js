function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  

  

  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");
  

  if (username === storedUsername && password === storedPassword) {
    window.location.href = 'C:/Users/Note do Túllio/Desktop/LPW/index.html';
  } else {
    alert("Senha ou Usuario Invalidos");
  }
}
