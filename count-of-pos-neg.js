function countPositivesSumNegatives(input) {
    let a = 0
    let b = 0
    for (i=0; i<input.length; i++) {
      if(input[i]>0) {
        a++
      } else if (input[i] < 0 ) {
        b+=input[i]
      }
    }
    let arr = [a,b]
    return arr
  }