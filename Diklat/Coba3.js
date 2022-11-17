// function diskon(x){
//     let pandemic = (x * 30)/100
//     return pandemic
// }

// let sale = diskon(promt("Harga Beli:"));
// console.log(sale);

// class car {
//     constructor(name , year) {
//         this.name = name;
//         this.year = year;
//     }
//     age(x) {
//         return x - this.year;
//     }
// }

// let date = new Date();
// let year = date.getFullYear();

// let myCar = new car("Ford" , 2019);
// console.log("My car is" + myCar.age(year) + "years old");
const prompt=require("prompt-sync")({sigint:true});

class bio {
    constructor(name , tahunlahir) {
        this.name = name;
        this.tahunlahir = tahunlahir;
    }
    age(x) {
        return x - this.tahunlahir;
    }
}

let date = new Date();
let tahunlahir = date.getFullYear();

let intro = new bio(prompt("Nama: "), prompt("Tahun Lahir: "));
console.log("Nama saya adalah " + intro.name + ", umur saya adalah " + intro.age(tahunlahir) + " tahun");