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
//* Ornegin Book nesnesinin tum instance'lari getSummary() fonksiyonunu miras alabilir.
//* Ancak, getSummary() fonksiyonu bellekte sadece bir yer kaplamaktadir.

Book.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`
}
console.log(Book.prototype);


// Book kalıbında yeni bir örnek (instance) oluşturduk****
const book1 = new Book("Kasagi","Ömer Seyfettin",1920)
console.log(book1.getSummary());

const book2 = new Book("Cin Ali","Ali Desidero",2002)
console.log(book2.getSummary());

const book3 = new Book("Yiğidi Gül Ağlatır","Yusuf Miroğlu",2003)
console.log(book3.getSummary(),book3);

//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

console.log(book1.__proto__);

// book1.price = 236;  (sadece book1 e uygulanır)
Book.prototype.price = 0;    //Tüm book objelerine uygulanır
console.log(book1);

book1.price = 130;
book2.price = 185;

console.log(book1,book2,book3);
