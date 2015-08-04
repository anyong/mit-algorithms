function maxCrossingSubarray(array, low, mid, high) {
    low = low || 0;
    high = high || array.length - 1;
    mid = mid || Math.floor((high-low)/2);

    var leftSum  = -Infinity,
        rightSum = -Infinity,
        sum,
        lowIndex,
        highIndex,
        maxVal;

    sum = 0;
    for (let i = mid; i >= low; i--) {
        sum += array[i];
        if (sum > leftSum) {
            leftSum = sum;
            lowIndex = i;
        }
    }

    sum = 0;
    for (let j = mid + 1; j <= high; j++) {
        sum += array[j];
        if (sum > rightSum) {
            rightSum = sum;
            highIndex = j;
        }
    }

    return {
        lowIndex,
        highIndex,
        maxVal: leftSum + rightSum
    };
}

export default maxCrossingSubarray;