// You will be given an array a and a value x.
// All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
// Examples-->
// check([66, 101], 66) // output -->  true
// check([101, 45, 75, 105, 99, 107], 107) // output -->  true
// check(['t', 'e', 's', 't'], 'e') // output -->  true
// check(['what', 'a', 'great', 'kata'], 'kat') // output -->  false

function check(arrA, x) {
  let result = arrA.indexOf(x);
  if (result < 0) {
    console.log("No! x, are not element of arrA");
  } else {
    console.log(`Yes, x, arrA'nın ${result}. elemanıdır`);
  }
}
check();

