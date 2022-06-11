const products = [

]

// products.forEach(product => {
//     console.log(product.name)
// })



// for (let i = 0; i < products.length; i++) {
//     const { name, price } = products[i]
//     const { fullName, size } = name
//     console.log(name, (price ? price : "Not Found"))
// }


// console.log(product.name)

// console.log((Array.isArray(products) && products.length))
// const isEmpty = (arr) => {
//     if ((Array.isArray(arr) === true) && arr.length > 0) {
//         return false
//     }
//     return true
// }

// console.log(isEmpty(products))

const isEmpty = (arr) => Array.isArray(arr) && !arr.length

console.log(isEmpty(products))