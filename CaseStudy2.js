var nilaiPeserta = parseInt(prompt("masukkan nilai  : ",'0-100'));
if (100>=nilaiPeserta && nilaiPeserta>80){
        document.write("Nilai A")
}else if (80>=nilaiPeserta && nilaiPeserta>60){
        document.write("Nilai B")
}else if (60>=nilaiPeserta && nilaiPeserta>40){
        document.write("Nilai C")
}else if(40>=nilaiPeserta && nilaiPeserta>20){
        document.write("Nilai D")
}else if(nilaiPeserta<=20){
        document.write("Nilai E")
}else{
    document.write('masukkan nilai yang benar')        
}
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */



/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/
