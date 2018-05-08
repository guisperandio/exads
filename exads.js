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
  let freq = []
  let target = 0
  let result = []
  values.map((elemnt) => {
    if (typeof freq[elemnt] === 'undefined') {
      freq[elemnt] = 1
    } else {
      freq[elemnt]++
    }
  })
  for (let key in freq) {
    if (freq[key] > target) {
      target = freq[key]
    }
  }
  for (let key in freq) {
    if (freq[key] === target) {
      result.push(key)
    }
  }

  return result
}

console.log(findHighest([ 1, 2, 3, 3, 'a', 'b', 'b', 'c' ]))
