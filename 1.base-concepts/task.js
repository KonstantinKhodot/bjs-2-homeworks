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
  let totalAmount;
  "use strict"
  Payment = S * (P + (P / (((1 + P)**n) - 1)));
  let arr;
  let percent = percent / 100 / 12;
  let contribution = contribution;
  let amount = amount;
  if (isNaN(percent) < 0) {
    return '"Процентная ставка"';
    } else if (isNaN(contribution) < 0) {
      return '"Первоначальный взнос"';
    } else if (isNaN(amount) < 0) {
      return '"Общая сумма"'
    } else {
      let today = new Date;
      if (today.getFullYear() > Date.getFullYear()) {
        return '"Срок ипотеки"';
          return totalAmount;
      }
    }
  }