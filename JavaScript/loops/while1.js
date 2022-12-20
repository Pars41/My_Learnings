let number;
let counter = 0
number = Math.abs(-140) ;
while(number > 0) {
    number = Math.trunc( number / 10);
    counter++; 
}
console.log(counter);

