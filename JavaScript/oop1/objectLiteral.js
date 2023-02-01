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