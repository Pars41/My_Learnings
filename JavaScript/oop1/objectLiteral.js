//* ========================================
//*                (OOPS)
//* =========================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
    title: "Papillion",
    author: "Henri Charriere",
    year:1988,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
console.log(book1);
console.log(book1.getSummary());
console.log(book1.hasOwnProperty("year"));

const book2 = {
    title: "Kürk Mantolu Madonna",
    author: "Sabahattin Ali",
    year:1943,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book2.getSummary());
