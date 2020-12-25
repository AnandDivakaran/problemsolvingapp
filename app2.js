/*
 Takes a sorted array in ascending order and returns an array of the first 2 numbers whose sum is zero 
*/

const scanArray = (arr) => {
    let result = [];
    if(!arr || arr.length <=1) {
        return undefined;
    }
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        let sum = arr[start] + arr[end];
        if(sum == 0) {
            return [arr[start], arr[end]];
        }
        else if(arr[start] > 0) {
            return undefined;
        }
        else if (sum > 0) {
            --end;
        } else {
            ++start;
        }
    }
    return undefined;
};

module.exports = scanArray;