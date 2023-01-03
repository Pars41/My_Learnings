// Senior Level
// ----------------------------------------------------
// Find the closest palindrome number for your code:

// Example:
// Input: 216
// Output: 212

// Input: 100
// Output: 99

// Input: 77
// Output: 77

// NOTE:
// - palindrome number is number is same from left - right side
// - If the number itself is a palindrome, return that number.
// - If two palindrome numbers distance is same choose smaller number.

// let palindromeArray = [];
// for (i=0; i<=1000; i++ ){
//     if(i === Number( i.toString().split("").reverse().join(''))  ){
//         palindromeArray.push(i)

//     }
// }
// console.log(palindromeArray);

// let i = 569;
// console.log(i);
// let sonuc = Number(i.toString().split("").reverse().join(''))
// console.log(sonuc);

function nearestPalindrom(numb) {
  if (numb === Number(numb.toString().split("").reverse().join(""))) {
    console.log(`${numb} is a palindrome number.`);
  } else if (numb < 0) {
    console.log("Nearest palindrome number is 0.");
  } else {
    let count = 0;
    let pNearest = 0;
    for (i = numb - 1; i > 0; i--) {
      count++;
      if (i === Number(i.toString().split("").reverse().join(""))) {
        pNearest += i;
        break;
      }
    }
    for (i = numb + 1; i < numb + count; i++) {
      if (i === Number(i.toString().split("").reverse().join(""))) {
        pNearest = i;
        break;
      }
    }
    console.log(`Nearest palindrome is ${pNearest}`);
  }
}

nearestPalindrom(numb);
