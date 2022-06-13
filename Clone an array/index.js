const products = [
    {
        name: "product 1",
        price: "30$",
    },
    {
        name: "product 2",
        price: "30$",
    }
]

// const newProducts = products

// for (let i = 0; i < 10; i++) {
//     console.time("time Slice")
//     const newProducts6 = products.slice(0)
//     console.timeEnd("time Slice")

//     console.time("time[....]")
//     const newProducts1 = [...products] //[{},{}]
//     console.timeEnd("time[....]")

//     console.time("time Concat")
//     const newProducts2 = products.concat([]) //[{},{}]
//     console.timeEnd("time Concat")

//     console.time("time from")
//     const newProducts3 = Array.from(products) //[{},{}]
//     console.timeEnd("time from")

//     console.time("time Map")
//     const newProducts4 = products.map(product => product)
//     console.timeEnd("time Map")

//     console.time("time JSON---------")
//     const newProducts5 = JSON.parse(JSON.stringify(products))
//     console.timeEnd("time JSON---------")
// }






// newProducts.push({
//     name: "Product 3",
//     price: "30$"
// })
// console.log("products", products)
// console.log("new products", newProducts)


// Start Main Code
// const clone = (arr) => arr.slice(0)
// const clone = (arr) => [...arr]
// const clone = (arr) => Array.from(arr)
// const clone = (arr) => arr.map(item => item)
// const clone = (arr) => JSON.parse(JSON.stringify(arr))
// const clone = (arr) => arr.concat()



// End Main Code

// Test Code
// const newProducts = clone(products)
// newProducts.push({
//     name: "Product 3",
//     price: '30$'
// })

// console.log("Products: ", products)
// console.log("New Products: ", newProducts)
// newProducts.pop()
// console.log("New Product After Pop", newProducts)


// oldData + newData
// => oldDataNewData


// Test Result : 
// 1. from(1)[...](2)
// 2. from(3)[...](1)
// 3. from(3)[...](1)
// 4. from(3)[...](1)
// 5. from(2)[...](3)
// 6. from(4)[...](1)
// 7. from(3)[...](1)
// 8. from(3)[...](1)
// 9. from(1)[...](4)
// 10. from(4)[...](1)
// 6. from(1)[...](1)

