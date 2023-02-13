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
  let min, max, sum, avg;
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

  return { sum };
}

function differenceMaxMinWorker(...arr) {
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
      max = sum;
    }
    avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}


function differenceEvenOddWorker(...arr) {
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
      max = sum;
    }
    avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function averageEvenElementsWorker(...arr) {
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
      max = sum;
    }
    avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function worker(arr) {
  let sum = 0;
  for(var i in arr) {
    sum += arr[i];
  }
  return sum;
}

function makeWork (arrOfArr, func) {
  let max;
  arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]];
  for (var i in arrOfArr) {
      if (worker(arrOfArr[i]) > max) {
      max = worker(arrOfArr[i]);
      }
      sum = max;
    return max;
  }
}
