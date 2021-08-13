//Soal 1
// Buatlah sebuah fungsi dengan kemampuan sebagai berikut: 
// - apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus. 
// - apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai volume. 

var luas = function(p,l,t){
    return 2*((p * l) + (p * t) +(l * t))
}

var volume = function(p,l,t){
    return p * l * t

}

var menu = parseInt(prompt('Pilih besaran balok yang ingin dihitung : 1- Luas; 2- Volume'));
    if (menu === 1){
        let p = parseInt(prompt('Masukkan Panjang :'));
        let l = parseInt(prompt('Masukkan Lebar:'));
        let t = parseInt(prompt('Masukkan Tinggi :'));
        document.write(`Luas Permukaan balok = 2 * ((${p} * ${l}) + (${p} * ${t}) + (${l} * ${t})) = ${luas(p,l,t)}`);
    } else if (menu === 2){
        let p = parseInt(prompt('Masukkan Panjang :'));
        let l = parseInt(prompt('Masukkan Lebar:'));
        let t = parseInt(prompt('Masukkan Tinggi :'));
        document.write(`Luas Permukaan balok = ${p} * ${l} * ${t} = ${volume(p,l,t)}`);
    }else{
        document.write('Input tidak valid');
    }
