/*
 Maxiumum sum of n consecutive elements in an array
*/

const scanArray = (arr, n) => {
    if(!arr || n > arr.length || !n || n <=0) {
        return 0;
    } else {
        let maxSum = -Infinity, prevSum = 0;
        for(let i=0; i<arr.length-n+1; i++) {
            let currSum = 0;
            if(i == 0) {
                for(let j=i; j<n; j++) {
                    currSum += arr[j];
                }
            } else {
                currSum = prevSum - arr[i-1] + arr[n];
            }
            if(currSum > maxSum) {
                maxSum = currSum;
            }
            prevSum = currSum;
        }
        return maxSum;
    }
};

module.exports = scanArray;