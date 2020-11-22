let pelanggan = document.querySelector('#nama')
let Email = document.querySelector('#email')
let jam = document.querySelector('#jam')
let tujuan = document.querySelector('#tujuan')
let tiket = document.querySelector('#tiket')
let hasil = document.querySelector('#hasil')


document.querySelector("#submit").addEventListener("click", function(event) {
    event.preventDefault()

    validasi();
});

function validasi() {

    if (nama.value == "") {
        error(nama, "* Nama tidak boleh kosong");
        return false
    } else if (nama.value.length >= 30) {
        error(nama, "* Nama tidak boleh lebih dari 30 karakter");
        return false
    } else {
        sukses(nama);
    }

    if (email.value == "") {
        error(email, "* email tidak boleh kosong");
        return false
    } else if (!isEmail(email.value)) {
        error(email, "* email tidak valid");
        return false
    } else {
        sukses(email)
    }

    if (jam.value == "") {
        error(jam, "* jam wajib diisi");
        return false
    } else {
        sukses(jam);
    }

    if (tujuan.value == "") {
        error(tujuan, "* tujuan wajib diisi");
        return false
    } else {
        sukses(tujuan);
    }

    if (tiket.value == "") {
        error(tiket, "* jumlah tiket wajib diisi");
        return false
    } else if (parseInt(tiket.value) < 1) {
        error(tiket, "* jumlah tiket yang anda masukkan tidak valid");
        return false
    } else if (parseInt(tiket.value) > 10) {
        error(tiket, "* jumlah tiket yang anda masukkan tidak valid");
        return false
    } else if (typeof(tiket.value) != Number) {
        error(tiket, "* tiket harus  angka")
    } else {
        sukses(tiket);
    }

    hasil.innerHTML = `<p>${nama.value}</p>
                        <p>${email.value}</p>
                        <p>${jam.value}</p>
                        <p>${tujuan.value}</p>
                        <p>${tiket.value}</p>`
}

function error(input, pesan) {
    const li = input.parentElement;
    const span = li.querySelector('span');
    span.className = 'error';
    span.innerText = pesan;
}

function sukses(input) {
    const li = input.parentElement;
    const span = li.querySelector('span');
    span.className = 'sukses';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}