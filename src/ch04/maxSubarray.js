import maxCrossingSubarray from './maxCrossingSubarray';

function maxSubarray(array, low, high) {
    if (typeof low === 'undefined') {
        low = 0;
    }
    if (typeof high === 'undefined') {
        high = array.length - 1;
    }

    if (low === high) {
        return {
            lowIndex: low,
            highIndex: high,
            maxVal: array[low]
        }
    }

    var mid,
        leftResult,
        rightResult,
        crossResult;

    mid = Math.floor((high - low) / 2) + low;

    leftResult = maxSubarray(array, low, mid);
    rightResult = maxSubarray(array, mid + 1, high);
    crossResult = maxCrossingSubarray(array, low, mid, high);

    if (leftResult.maxVal >= rightResult.maxVal &&
        leftResult.maxVal >= crossResult.maxVal) {
        return leftResult;
    }

    if (rightResult.maxVal >= leftResult.maxVal &&
        rightResult.maxVal >= crossResult.maxVal) {
        return rightResult;
    }

    return crossResult;
}

export default maxSubarray;