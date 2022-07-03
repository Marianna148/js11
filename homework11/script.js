const firstArr = [1,2,3, `hello`, 4,5, true, function f1() {}];
const secondArr = [1,2,3, true, 4, undefined, 6];

function sumArray (arr1, arr2){
    let sum = 0;
    for(let i = 0; i < arr1.length; i++) {
        if(!isNaN(arr1[i])) sum += arr1[i];
    }

    let sum1 = 0;
    for(let i = 0; i < arr2.length; i++) {
        if(!isNaN(arr2[i])) sum += arr2[i];
    }

    if(sum < sum1) return arr2;
    return arr1;

}



 console.log(sumArray(firstArr, secondArr));
