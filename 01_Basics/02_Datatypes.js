// # PRIMITIVE DATA TYPES :

// number
// bigint
// string => ""
// booleaM => true/false
// null => standalone value
// undefined => value is not assigned
// symbol => for uniqueness 

// # NON PRIMTIVE DATA TYPES :

// object

console.log(typeof("harsh"))
console.log(typeof(age))
console.log(typeof null) // will return object
console.log(typeof undefined) // of undefined datatype


 
// Data type conversions 

let score = "23abc"
console.log(typeof(score)) // string value
let valueInNumber = Number(score) // converted to NaN
console.log(typeof valueInNumber) // will return number as datatype 
console.log(valueInNumber) // will return NaN
let char = "a"
console.log(Number(char)) // will return NaN

// this problem will also arises with null and  undefined 
// "33" => 33
// "33abc" => NaN (typeof = Number)
// "a" => NaN
// null => 0
// undefined => NaN 
// true/false => 0/1    

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) //coverted to true
console.log(booleanIsLoggedIn)
// 1 => true , 0 => false   
// " " => false
// "Ramesh" => true 

let someNumber = 21
let stringNumber = String(someNumber) //strig conersion
console.log(typeof stringNumber)



// ************* Operations ****************

let value = 5
let negValue = -value
console.log(value)
console.log(negValue)

let str1 = "Hello"
let str2 = " Harsh"
console.log (str1 + str2)

console.log("1" + 20) // 120
console.log(1 + "20") // 120

console.log("1" + 2 + 2) // 122
console.log(2 + 2 + "1") // 41