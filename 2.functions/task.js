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

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}


function worker(arr) {
  let min, max, difference;
  min = Infinity; 
  max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < min)
    min = arr[i];

    if(arr[i] > max)
    max = arr[i];
    difference = Math.abs(max - min);
  }
  return makeWork;
}

function makeWork (...arrOfArr) {
  let max;
  arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]];
  for (let i in arrOfArr) {
      if (worker(arrOfArr[i]) > max) {
      max = worker(arrOfArr[i]);
      }
      const funcResult = func(...arrOfArr[i]);
      if (funcResult > max) {
        max = funcResult;
}
      sum = max;
    return max;
  }
}
function worker2(arr) {
  let min, max, difference;
  
  min = Infinity;
  max = -Infinity;
  for (let i = 0; i < arr.length; i += 1) {
  if(arr[i] < min)
  min = arr[i];
  
  if(arr[i] > max)
  max = arr[i];
  difference = Math.abs(min - max);
  }
  return makeWork();
}
