function nilai() {
    let nilai = document.querySelector('#uang').value;
    let.Jumlah = document.querySelector('#Jumlah').value;
    let rupiah = document.querySelector('#rupiah')

    if (select == 'dollar us') {
        rupiah.value = nilai * 9915;
    } else if (select == 'dollar sg') {
        rupiah.value = nilai * 13472;
    } else if (select == 'Ringgit Malaysia') {
        rupiah.value = nilai * 874;
    } else if (select == 'Yen Jepan') {
        rupiah.value = nilai * 120;
    } else if (select == 'Euro') {
        rupiah.value = nilai * 15888;
    } else if (select == 'Riyal Arab Saudi') {
        rupiah.value = nilai * 3592;
    }

    return false;
}
}