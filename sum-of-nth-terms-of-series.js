function SeriesSum(n)
{
  let sum = 1
  // Happy Coding ^_^
  if (n == 0) {
    return '0.00'
  }
  else if (n==1) {
    return '1.00'
  }
  else for (i=1; i<n; i++) {
    sum += 1/(1+i*3)
  }
  return String(sum.toFixed(2))
}