function nbYear(p0, percent, aug, p) {
    // your code
  let pop = p0
  let years = 0
  while (pop < p) {
  pop = pop + (pop*percent*0.01) + aug
  years++
  }
  return years
}