let grade = Number(prompt("your grade"));
while(grade<0 || grade > 100){
    console.log("Grade must be 0-100");
    grade = Number(prompt("your grade"))
}
console.log(`Your grade : ${grade}`);