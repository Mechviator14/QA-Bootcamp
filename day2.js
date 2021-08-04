// alert ('test');
var nama123 = '1234';
document.write(typeof(nama123) + '<br>');
nama123 = 1234;
document.write(typeof(nama123) + '<br>');
nama123 = true
document.write(typeof(nama123) + '<br>)';

var namapengunjung = prompt('Masukkan nama' , "Dohobers");

document.write('Hai' + namapengunjung + ',selamat datang di dohobox'+ '<br>');

var konfirmasi = confirm('Masih mau disini kan?');
var hasil = (konfirmasi === true)? 'Iya donk' : 'GAK' 
document.write (hasil + '<br>');

var angka = parseInt(prompt("masukkan angka yang mau di test : ")) //;

if (angka > 10) {
    document.write("bilangan yang dimasukkan lebih dari 10" + '<br>') //}

var nama = 'ezra' //
var nama =prompt('masukan nama : ' , 'nama pengunjung') //
if (nama == 'ezra') {
    document.write('seorang pilot')
}else{
   document.write('Salah Orang')
}
var nilai = prompt('masukkan nilai :');
if(nilai % 2 ==0){
    document.write(nilai + 'merupakan bilangan genap')
} else if (nilai % 2 ==1){
    document.write(nilai + 'merupakan bilangan ganjil')
}else{
    document.write(nilai + 'bukan bilangan')
}

 var nilai_ujian = parseInt(prompt("Masukkan nilai kepuasan anda?","0-100"));
 switch(true){
     case (nilai_ujian >= 90):
         document.write('Grade A');
         break;
     case (nilai_ujian >= 80):
         document.write('Grade B');
         break;
     case (nilai_ujian >= 70):
         document.write('Grade C');
         break;
     case (nilai_ujian >= 60):
         document.write('Grade D');
         break;
     default:
         document.write('Kurang beruntung');
 }               

