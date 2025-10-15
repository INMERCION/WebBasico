document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  if (usuario === "admin" && password === "1234") {
    mensaje.style.color = "green";
    mensaje.textContent = "Inicio de sesión exitoso ✅";
  } else {
    mensaje.style.color = "red";
    mensaje.textContent = "Usuario o contraseña incorrectos ❌";
  }
});
