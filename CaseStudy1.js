var x = 5;
var y = 8.5;

//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.

cetak (jumlah(x,y),kurang(x,y),kali(x,y),bagi(x,y),sisabagi(x,y))
function jumlah(a,b){
    return a + b
}

function kurang(a,b){
    return a - b
}

function kali(a,b){
    return a * b
}

function bagi(a,b){
    return a / b
}

function sisabagi(a,b){
    return a % b
}
function cetak (tambah,minus,Kali,Bagi,sisa){
    document.write('Hasil ' + x + ' + ' + y + ' adalah : ' + ' = ' + tambah + '<br>');
    document.write('Hasil ' + x + ' - ' + y + ' adalah : ' + ' = ' + minus + '<br>');
    document.write('Hasil ' + x + ' X ' + y + ' adalah : ' + ' = ' + Kali + '<br>');
    document.write('Hasil ' + x + ' : ' + y + ' adalah : ' + ' = ' + Bagi + '<br>');
    document.write('Hasil ' + x + ' % ' + y + ' adalah : ' + ' = ' + sisa + '<br>');
}
