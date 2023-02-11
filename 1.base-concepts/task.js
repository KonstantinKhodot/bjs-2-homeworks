function solveEquation(a, b, c) {
  let arr;
  "use strict"
  const d = b ** 2 - 4 * a * c;
  if(d < 0) {
    arr = [];
  }
  const d = -b / (2 * a);
  if(d = 0) {
    arr = [-1];
  }
  const d = (-b + Math.sqrt(d) )/(2*a) && (-b - Math.sqrt(d) )/(2*a);
  if(d > 0) {
    arr = [-1, -4];
  }
  return arr;
}