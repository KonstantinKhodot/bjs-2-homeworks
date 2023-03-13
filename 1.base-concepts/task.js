function solveEquation(a, b, c) {
  let arr;
  "use strict"
  let d = b ** 2 - 4 * a * c;
  if(d < 0) {
    arr = [];
  }
  else if(d === 0) {
    arr = [-b/(2*a)];
  }
  else if(d > 0) {
    arr = [(-b + Math.sqrt(d) )/(2*a),(-b - Math.sqrt(d) )/(2*a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount = 0;
  Payment = S * (P + (P / (((1 + P)**n) - 1)));
  let arr;
    let S = amount - contribution;
    let n = date.getMonth() - today.getMonth() + (12*(date.getFullYear() - today.getFullYear()));
    let P = percent/12/100;
    let totalAmount = (pay * n).toFixed(2);
    return totalAmount;
      }
    }
  }