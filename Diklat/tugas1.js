// Mendefinisikan fungsi prompt
const prompt=require("prompt-sync")({sigint:true});

/*
Mendefinisikan Variabel gula, air teh, dan perbandingan antara keduanya
Perbandingan digunakan agar lebih fleksibel dibandingkan dengan menggunakan logic
Hal ini karena kemungkinaan perbandingan gula dengan air teh relatif
Hal ini dapat dilihat ketika 1 sendok gula + 500 ml air teh = pas tetapi 2 dan 1000 juga pas... 10 dan 5000 juga pas...
*/
var gula = prompt("Banyak Gula (sendok):")
var airteh = prompt("Banyak Air Teh (ml):")
var perb = gula/airteh

//If Statement
if (perb > 1/500) {
    console.log("Kemanisan");
}
if (perb < 1/500) {
    console.log("Hambar");
}
if (perb == 1/500) {
    console.log("Muantap!");
}

/*
Original Code by Gangga Dara D.
*/