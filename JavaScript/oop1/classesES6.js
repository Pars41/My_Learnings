//* ==============================================
//*      OOP - Classes and Inheritance (ES6)
//* ===============================================

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)

console.log("*** ES-6 - Classes");

class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
        //bu alana yazılan her metot her bir instance da yer alır ve doğru değil
        

    }
    //bu kısımda yazılanlar ise prototype alanına gider
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    getTitle = function(){
        return this.title
    }
    getAge(){
        return `${new Date().getFullYear()-this.year}`
    }
}
// Book kalıbında yeni bir örnek (instance) oluşturduk****
const book1 = new Book("Kasagi","Ömer Seyfettin",1920)
console.log(book1);
console.log(book1.getSummary());

const book2 = new Book("Cin Ali","Ali Desidero",2002)
console.log(book2.getSummary());

console.log(book2.getAge());


//Sub-class tanımlanması 
 class Magazine extends Book {
    constructor(title,author,yaer,month){
        super(title,author,yaer)
        this.month = month

    }
 }

 const mag1 = new Magazine("Hayvan Çiftliği", "George Orwell", 1945, "Agu")
console.log(mag1.getAge(),"*",mag1.getSummary(),"*",mag1.getTitle());