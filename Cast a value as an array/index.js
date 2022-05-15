// Data : 
// String
// Number
// Object
// function
// Array

// function castArray(value) {
//     // if (Array.isArray(value)) return value
//     // return [value]
//    return Array.isArray(value) ? value : [value]
// }



// console.log(Array.isArray(new Array()))
// console.log(new Array(1,2))
// console.log([])

// {
//     name:"Rasel",

// }

// 
// const typedArray1 = new Int8Array(10);
// console.log(typedArray1)

// const numbers = 123456
// let result = Array.from(numbers.toString())
// console.log(result)

// const myNumber = 1245;
// "1245"
// ["1","2","4","5"]
// function numberToArray(number) {
//     let array = number.toString().split("");//stringify the number, then make each digit an item in an array
// return array.map(x => +x);//convert all the items back into numbers
// }

// var n = 12345;
// var arr = n.toString().split('');
// '12345'
// ["1", "2", "4", "5"]
// for (i = 0; i < arr.length; i++) {    
//     arr[i] = +arr[i];
//     console.log(arr[i])
// }

// let word = "It is sweet 😋";
// console.log(word.split(""))
// console.log([...word])


const castArray = (value) => Array.isArray(value) ? value : [value]

// console.log(castArray(function(){}))

