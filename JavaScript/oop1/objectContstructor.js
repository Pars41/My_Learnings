//* =============================================
//*        OOP - Object Constructor (ES5)
//* =============================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

}

const book1 = new Book("Kasagi","Ömer Seyfettin",1920)
console.log(book1.getSummary());