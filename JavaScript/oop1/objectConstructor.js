//* =============================================
//*        OOP - Object Constructor (ES5)
//* =============================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

// Object Constructor**********

function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
    // this.getSummary = function(){
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // }

}
Book.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

// Book kalıbında yeni bir örnek (instance) oluşturduk****
const book1 = new Book("Kasagi","Ömer Seyfettin",1920)
console.log(book1.getSummary());

const book2 = new Book("Cin Ali","Ali Desidero",2002)
console.log(book2.getSummary());

