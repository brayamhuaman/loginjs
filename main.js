function login() {
    var user, password
    user = document.getElementById("usuario").value;
    password = document.getElementById("password").value;
    
    if(user == "prueba" && password == "1234") {
        alert("Bienvenido");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}