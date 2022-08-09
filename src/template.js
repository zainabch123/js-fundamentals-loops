// Template module

let array = []
let object = {}

// 1. Set array to an array of 7 7s
array = Array(7).fill(7)

// 2. Set object to have the following properties
//    hi = "Hello"
//    doubleFun = function that doubles its parameter
//    empty = null
//    eightSevens = an array of 8 7s

object.hi = 'Hello'
object.doubleFun = function (n) {
  return 2 * n
}
object.empty = null
object.eightSevens = array.concat(7)

module.exports = {
  a: array,
  b: object
}
