//Soal 2
// Terdapat 5 data nama berikut ini: 
//     1. Budi 
//     2. Adi 
//     3. Gunawan 
//     4. Joko 
//     5. Bambang 
// Silahkan berikan kondisi ketika nama di atas diinputkan akan mengeluarkan output "Boleh masuk!" dan selain nama di atas akan mengeluarkan output "Tidak boleh masuk!". 
var nama2 = ['Budi','Adi','Gunawan','Joko','Bambang'];
var menu = (prompt('Masukkan nama : Budi ; Adi ; Gunawan; Joko ; Bambang'));
    switch (menu){
        case nama2[0]:
            document.write('Saudara ' + nama2[0] +' Boleh masuk');
            break;
        case nama2[1]:
            document.write('Saudara ' + nama2[1] +' Boleh masuk');
            break;
        case nama2[2]:
            document.write('Saudara ' + nama2[2] +' Boleh masuk');
            break;
        case nama2[3]:
            document.write('Saudara ' + nama2[3] +' Boleh masuk');
            break;
        case nama2[4]:
            document.write('Saudara ' + nama2[4] +' Boleh masuk');
            break;
        default :
            document.write('Tidak boleh masuk');
    }
