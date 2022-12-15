let result;
let a = 10, b =20, c = 32;

// Arithmetic Operators

result = a + b;
result = a - b;
result = a * b;
result = a / b;
result = c % a;
result = a++;
result = ++a;
result = --a;
result = a--;


// Assignment Operators

result = a;
result += a;
result -= a;
result *= a;
result /= a;
result %= a;

// Comparison Operators 

result = (a == b);
result = (a != b);
result = (a === b);
result = (a > b);
result = (a < b);
result = (a <= b);

// Logical Operators &&  ||  ! (null,undefined,"",0,NaN ışındaki durumlar true kabul edilir)

result = a+b+c;
if(result>60){
    console.log("evet 60dan büyük");
}
if(result>60 && b>60){
    console.log("evet 60dan büyük");
}else{
    console.log("ikisi birden 60dan büyük değil");
}

if(result>60 || b>60){
    console.log("evet ikisinden birisi 60dan büyük");
}else{
    console.log("hayır ikisi de 60dan büyük değil");
}

result = c>50;

console.log(!result);