/*
 Takes a sorted array and returns the count of all unique values.
*/

const scanArray = (arr) => {
    if(!arr || arr.length == 0) {
        return 0;
    }
    let i = 0;
    for(let j = i + 1; j<arr.length; j++) {
        if(arr[i] !== arr[j]) {
            arr[++i] = arr[j];
        }
    }
    return i + 1;
};

module.exports = scanArray;