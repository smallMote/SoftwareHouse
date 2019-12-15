// function f (m, n) {
//
// }

function _0_fill (m, n) {
  const arr = []
  function f (count) {
    if (count > 0) {
      arr.push(n)
      f(count - 1)
    }
  }
  f(m)
  return arr
}
// console.log(_0_fill(3, 4))
function _1_fill (m, n) {
  const arr = []
  arr.length = 4
  arr.fill(3, 0, 4)
  return arr
}

function _0_change(a, b) {
  a = [b, b = a][0]
  return { a, b }
}

function _1_change(a, b) {
  a ^= b
  b ^= a
  a ^= b
  return { a, b }
}
console.log(_1_change('a', 'b'))
