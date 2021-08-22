var paragraph1 = document.getElementsByClassName('p1')[0];
var paragraph2 = document.getElementsByClassName('p2')[0];
var paragraph3 = document.getElementsByClassName('p3')[0];
var pB = document.querySelector('#b p')
var c = document.getElementsByTagName('c')
var cx = document.querySelectorAll('#c ul li p')
var cy = document.querySelector('#c ul')
var c1 = document.querySelectorAll('#c ul li p')[0]
var c2 = document.querySelectorAll('#c ul li p')[1]
var c3 = document.querySelectorAll('#c ul li p')[2]
var c4 = document.querySelectorAll('#c ul li p')[3]
var c5 = document.querySelectorAll('#c ul li p')[4]
var c6 = document.querySelectorAll('#c ul li p')[5]
var c7 = document.querySelectorAll('#c ul li p')[6]
var c8 = document.querySelectorAll('#c ul li p')[7]
var c9 = document.querySelectorAll('#c ul li p')[8]
var c10 = document.querySelectorAll('#c ul li p')[9]
var buttonsatu = document.getElementById('buttonSatu');
var buttondua = document.getElementById('buttonDua');
var buttontiga = document.getElementById('buttonTiga');
var buttonempat = document.getElementById('buttonEmpat');
var buttonlima = document.getElementById('buttonLima');
var buttonenam = document.getElementById('buttonEnam');
var buttontujuh = document.getElementById('buttonTujuh');
var buttondelapan = document.getElementById('buttonDelapan');
var buttonsembilan = document.getElementById('buttonSembilan');
var buttonsepuluh = document.getElementById('buttonSepuluh');

//button1 : ubah semua warna  background paragraph
function ubahWarnaParagraph(){
    paragraph1.style.backgroundColor = 'Yellow'
    paragraph2.style.backgroundColor = 'LightBlue'
    paragraph3.style.backgroundColor = 'Magenta'
    pB.style.backgroundColor = 'Yellow'
    c1.style.backgroundColor = 'Cyan'
    c2.style.backgroundColor = 'Cyan'
    c3.style.backgroundColor = 'Cyan'
    c4.style.backgroundColor = 'Cyan'
    c5.style.backgroundColor = 'Cyan'
    c6.style.backgroundColor = 'Cyan'
    c7.style.backgroundColor = 'Cyan'
    c8.style.backgroundColor = 'Cyan'
    c9.style.backgroundColor = 'Cyan'
    c10.style.backgroundColor = 'Cyan'
};
function balikWarnaParagraph(){
    paragraph1.style.backgroundColor = 'White'
    paragraph2.style.backgroundColor = 'White'
    paragraph3.style.backgroundColor = 'White'
    pB.style.backgroundColor = 'White'
    c1.style.backgroundColor = 'White'
    c2.style.backgroundColor = 'White'
    c3.style.backgroundColor = 'White'
    c4.style.backgroundColor = 'White'
    c5.style.backgroundColor = 'White'
    c6.style.backgroundColor = 'White'
    c7.style.backgroundColor = 'White'
    c8.style.backgroundColor = 'White'
    c9.style.backgroundColor = 'White'
    c10.style.backgroundColor = 'White'
    
};
buttonsatu.onclick = ubahWarnaParagraph;
buttonsatu.ondblclick = balikWarnaParagraph;

//button2 : merubah warna background color dan warna text button "Dua"
function ubahWarnaButtonDua(){
    buttondua.style.backgroundColor = 'LightGreen'
    buttondua.style.fontFamily = 'Times New Roman'
}
function balikWarnaButtonDua(){
    buttondua.style.backgroundColor = 'White'
    buttondua.style.fontFamily = 'Calibri'
}
buttondua.onclick = ubahWarnaButtonDua;
buttondua.ondblclick = balikWarnaButtonDua;

//button3 : merubah font-family dan warna text semua paragraph
function ubahWarnaButtonTiga(){
    paragraph1.style.color = 'Orange'
    paragraph1.style.fontFamily = 'Comic Sans MS'
    paragraph2.style.color = 'Cyan'
    paragraph2.style.fontFamily = 'Arial'
    paragraph3.style.color = 'DarkGreen'
    paragraph3.style.fontFamily = 'Arial Black'
    pB.style.color = 'DarkRed'
    pB.style.fontFamily = 'Stencil'
    c1.style.color = 'DarkBlue'
    c1.style.fontFamily = 'Comic Sans MS'
    c2.style.color = 'DarkBlue'
    c2.style.fontFamily = 'Comic Sans MS'
    c3.style.color = 'DarkBlue'
    c3.style.fontFamily = 'Comic Sans MS'
    c4.style.color = 'DarkBlue'
    c4.style.fontFamily = 'Comic Sans MS'
    c5.style.color = 'DarkBlue'
    c5.style.fontFamily = 'Comic Sans MS'
    c6.style.color = 'DarkBlue'
    c6.style.fontFamily = 'Comic Sans MS'
    c7.style.color = 'DarkBlue'
    c7.style.fontFamily = 'Comic Sans MS'
    c8.style.color = 'DarkBlue'
    c8.style.fontFamily = 'Comic Sans MS'
    c9.style.color = 'DarkBlue'
    c9.style.fontFamily = 'Comic Sans MS'
    c10.style.color = 'DarkBlue'
    c10.style.fontFamily = 'Comic Sans MS'
};
buttontiga.onclick = ubahWarnaButtonTiga;

//button 4 : merubah font size semua paragraph
function ubahSizeParagraphButtonEmpat(){
    paragraph1.style.fontSize = '70px'
    paragraph2.style.fontSize = '70px'
    paragraph3.style.fontSize = '70px'
    pB.style.fontSize = '70px'
    c1.style.fontSize = '20px'
    c2.style.fontSize = '20px'
    c3.style.fontSize = '20px'
    c4.style.fontSize = '20px'
    c5.style.fontSize = '20px'
    c6.style.fontSize = '20px'
    c7.style.fontSize = '20px'
    c8.style.fontSize = '20px'
    c9.style.fontSize = '20px'
    c10.style.fontSize = '20px'
};
buttonempat.onclick = ubahSizeParagraphButtonEmpat;

//button 5 : ubah warna background color container
var container = document.getElementById('container')
function ubahWarnaContainerButtonLima(){
    container.style.backgroundColor = 'LightYellow'
};
buttonlima.onclick = ubahWarnaContainerButtonLima;

//button 6 : merubah tag "p" pada class p1 menjadi "h2"
var a = document.getElementById('a')
var a1 = document.querySelector('#a p:nth-child(1)')
var h2 = document.createElement('h2');
const tulisanbaru = document.createTextNode('selamat datang di dojobox.id');
h2.appendChild(tulisanbaru);
function ubahTagButtonEnam (){
    a.replaceChild(h2,a1)
    h2.classList.add('p1')
};
buttonenam.onclick = ubahTagButtonEnam;

//button 7 : menambah satu mentor baru dan menghapus mentor pertama
const b = document.getElementById('b')
const newElement = document.createElement('li')
const isiElement = document.createTextNode('Andika');
newElement.appendChild(isiElement)
const wadahLi = document.querySelector('#b ul');
const liJojo = wadahLi.querySelector('li:nth-child(1)');
const liAlif = wadahLi.querySelector('li:nth-child(2)')
function mentorButtonTujuh(){
    wadahLi.removeChild(liJojo)
    wadahLi.appendChild(newElement)
    
};
buttontujuh.onclick = mentorButtonTujuh;

//button 8 : mengganti text judul "DOOJOBOX.id" menjadi "Post Test"
const judul = document.getElementById('judul');
function judulTombolDelapan (){
    judul.innerHTML = 'Post Test';
};
buttondelapan.onclick = judulTombolDelapan;

//button 9 : menghapus link
var linkA = document.querySelector('#a a');
function hapusLinkTombolSembilan(){
    linkA.setAttribute('href','null')
};
buttonsembilan.onclick = hapusLinkTombolSembilan

//button 10 : tambah link ke github masing2

const NewLi = document.createElement('a');
const elementGit = document.createTextNode('Link ke Github Saya')
NewLi.appendChild(elementGit)
function linkGithubTombolSepuluh (){
    cy.appendChild(NewLi)
    NewLi.setAttribute('href','https://github.com/Mechviator14/QA-Bootcamp')
};
buttonsepuluh.onclick = linkGithubTombolSepuluh;

