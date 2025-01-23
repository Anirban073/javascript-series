let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

console.log(valueInNumber)

let a = null
let b = Number(a)
console.log(b);

//"33" => 33
//"33asvhd" => NaN => nopt a number
// true => 1
// false => 0
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//1 => true; 0=> false
//"" => false
//"Anirban" => true
