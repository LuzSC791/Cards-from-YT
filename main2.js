console.log(document.body.children[0])
// console.log(Array.from(document.body.childNodes).filter)

const body = document.body

let arrBody= Array.from(body.children)
let arrChild = arrBody[0].childNodes 
console.log(arrBody[0].childNodes)