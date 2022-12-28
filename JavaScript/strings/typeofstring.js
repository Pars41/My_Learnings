// STRING METHODS \\\\\\\\\\\\\\\\
console.log("********String Methods**********");

let str1 = "This is a string"
let str2 = 'This is a string'
let str3 = `This is a string`
let str4 = new String("This is a string")




// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);

console.log(typeof str1,"--->",str1);
console.log(typeof str2,"--->",str2);
console.log(typeof str3,"--->",str3);
console.log(typeof str4,"--->",str4);

let str5 = "Portakallar çiçek açmış";

console.log(str5[0],str5[1],str5[2],str5[3],str5[4],str5[5],str5[6],str5[7],str5[8],str5[9],str5[10]);
console.log(str5[12],str5[13],str5[14],str5[15],str5[16]);
console.log(str5[18],str5[19],str5[20],str5[21],str5[22]);


console.log(str5[str5.length-1]);


let str = 'You do not KNOW what you do not know until you know.'
let arry = [];
for(let i= 0 ; i<str.length; i++){
    if(str[i] === "o"){
        arry.push(i);
    }
}
console.log(arry);

str.indexOf()