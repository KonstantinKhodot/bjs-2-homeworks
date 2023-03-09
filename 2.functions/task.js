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
  max = 0;
  min = 0;
  for (let i = 0; i < arr.length; i++) {  
      if(arr[i] > max) {
        max = arr[i];
      }
      if(arr[i] < min) {
        min = arr[i];
      }
    }
  return (max - min);
  }




function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
    if (let i = 0; i > arr.length; i++) {
    sum += args[i];
  }
  return ( Math.max / Math.min) ;
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
