function compareArrays(arr1, arr2) {
  let result = (arr1, arr2) => ((arr1.length === arr2.length) && 
  (arr1.every((element, index) => element === arr2[index])));
  return result;
}

function getUsersNamesInAgeRange(users, gender) {
  
}

function advancedFilter(arr) {
    let result = arr.filter(2).filter(3).map(10);
    return result;
}
