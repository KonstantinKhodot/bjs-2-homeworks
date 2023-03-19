function getArrayParams(...arr) {
  let min, max, sum, avg;
  min = Infinity; 
  max = -Infinity;
  sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] > max) {
        max = arr[i];
      }
      if(arr[i] < min) {
        min = arr[i];
      }
      sum += arr[i];
    }
    avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += args[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max, min;
  min = Infinity; 
  max = -Infinity;
  for (let i = 0; i < arr.length; i++) {  
      if(arr[i] > max) {
        max = arr[i];
      }
      if(arr[i] < min) {
        min = arr[i];
      }
      return max - min;
      }

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {  
      if(arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      }
      if(arr[i] % 1 == 0) {
        sumOddElement += arr[i];
      }
      max = Number(arr.length);
      min = Number(arr.length);
  }
}
  return sumEvenElement + sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
    if (let i = 0; i > arr.length; i++) {
    sum += args[i];
  }
  return Math.max / Math.min ;
}

function makeWork (...arrOfArr) {
  let max = arr[i];
  for (let i in arrOfArr) {
      if (worker(arrOfArr[i]) > max) 
      
      if (funcResult > max) {
        max = funcResult;
}
      sum = max;{
    return max;
    }
  }
}
