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
      console.log(summElementsWorker());
      console.log(summElementsWorker(10, 10, 11, 20, 10));
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
      console.log(differenceMaxMinWorker());
      console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));
    }
    avg = Number((sum / arr.length).toFixed(2));

  return { sum };
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
      console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
      console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 
    }
    avg = Number((sum / arr.length).toFixed(2));

  return { sum };
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
      console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));
      console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
    }
    avg = Number((sum / arr.length).toFixed(2));

  return { sum };
}

function worker(arr) {
  let sum = 0;
  for(let i in arr) {
    sum += arr[i];
  }
  return sum;
}

function makeWork (...arrOfArr) {
  let max;
  arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]];
  const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
  console.log(makeWork(arr, summElementsWorker));
  console.log(makeWork(arr, differenceMaxMinWorker));
  console.log(makeWork(arr, differenceEvenOddWorker));
  console.log(makeWork(arr, averageEvenElementsWorker));
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
