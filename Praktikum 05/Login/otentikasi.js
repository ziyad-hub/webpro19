function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "ziyad" && password == "ziyad") {
        alert("Login Sukses");
        window.location = "sukses.html";
    } else {
        return alert('login anda tidak berhasil');
    }
}