function compareArrays(arr1, arr2) {
  return (arr1, arr2) => (arr1.length === arr2.length) && 
  (arr1.every((element, index) => element === arr2[index]));
  (element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    let result = arr.filter(...gender).map(...age).reduce((acc, item, index, users)=> {
        acc+=item;
        if(index === arr.length - 1){
            return acc / arr.length;
        }
        return acc;
    }
}
