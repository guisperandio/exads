let targetSumExistsInTwoNumbers = (values, target) => {
  let result = false
  values.reduce((prev, current, index) => {
    if (prev + current === target || prev + prev === target || current + current === target) {
      result = true
    }
  })

  return result
}

console.log(targetSumExistsInTwoNumbers([10, 20], 40))

let findHighest = (values) => {
  let freq = new Map()
  let target = 0
  let result = []
  values.map((elemnt) => {
    if (typeof freq.get(elemnt) === 'undefined') {
      freq.set(elemnt, 1)
    } else {
      freq.set(elemnt, freq.get(elemnt) + 1)
    }
  })

  for (const [key, value] of freq) {
    if (value > target) {
      target = value
    }
  }
  for (const [key, value] of freq) {
    if (value === target) {
      result.push(key)
    }
  }

  return result
}

console.log(findHighest([ 1, 2, 3, 3, 'a', 'b', 'b', 'c' ]))
