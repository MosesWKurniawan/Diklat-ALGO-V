// function diskon(x) {
//     let bajuPantai = (x * 15)/100
//     return bajuPantai
// }
// let sale = diskon(100000)
// console.log(sale)

class Computer {
    constructor(name,year) {
        this.name = name ;
        this.year = year ;
    }
    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

// let myBook = new Book ("Antariksa" , 2020 );
// console.log("My book is" +  myBook.age(year)  + "years old")
let myComputer = new Computer ("ASUS", 2015);
console.log("My computer is " + myComputer.age(year) + " years old")