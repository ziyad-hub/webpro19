unction pesan() {
    let kotak = document.getElementById("chat")
    let chat = document.getElementById("text")

    if (!chat == " ") {
        kotak.innerHTML += `<p>${chat.value}</p>`
    }
    return false;

}