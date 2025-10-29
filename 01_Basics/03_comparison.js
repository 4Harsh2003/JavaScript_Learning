// *************** Comparisons ******************

console.log(null == 0);
console.log(null > 0);
console.log(null >= 0); // will gives true because >=/== diff.

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);



// === strict check

console.log("2"==2) //true
console.log("2"===2) //will give you false



// # Avoid such camparisons , clean code is best code

// Summary :-

/*data types are based on how data is stored and accessed throughout memory

7 primitve types (call by value - no refrence , value is copied) : string, number, Boolean, null, undefined, symbol, BigInt

conast id = symbol("123") -> use for unique values  
const anotherId = symbol("123")
console.log(id===anotheId) // will give you false

JS is Dynamically typed (no datatype is need to be specified priorly)

Non Primitive (refernce type: direct refrence is allocated):  array, objects, functions
*/

const hero = ["papa", "mummy", "bhai"]
const info = {
name:"harsh",
age:24
}

const myfun = function(){
console.log("first function")}




// stack memory (for all primitive data types)
// heap memory (for all non prmitive data types)

let myMail = "abc@gmail.com"
let meraMail = myMail
meraMail = "pqr@gmail.com" // no change to myMail

let obj1 = {
name : "Harsh"}
obj2 = obj1
obj2.name = "rajesh" //value of obj1.name will also change




