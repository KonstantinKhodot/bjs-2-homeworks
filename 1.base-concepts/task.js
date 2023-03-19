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
  Payment = S * (P + (P / (((1 + P)**n) - 1)));
  if (isNaN(percent)) {
    return false;
  }
  if (isNaN(contribution)) {
    return false;
  }
  if (isNaN(amount)) {
    return false;
  }
    let arr;
        let totalAmount = (pay * countMonths).toFixed(2);
        let creditBody = amount - contribution;
        let countMonths = date.getMonth() - today.getMonth() + (12*(date.getFullYear() - today.getFullYear()));
        let percentDoubleMonth = percent/100/12;
        let payment = creditBody * (percentDoubleMonth + percentDoubleMonth / (((1 + percentDoubleMonth) ** countMonths) - 1));
    return totalAmount;
  }