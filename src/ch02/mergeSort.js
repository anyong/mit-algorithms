var insertionSort = require('./insertionSort');

function mergePresorted(Left, Right) {

    var A      = [],
        lLen   = Left.length,
        rLen   = Right.length,
        totLen = lLen + rLen,
        i      = 0,
        j      = 0,
        k      = 0;

    Left.push(Infinity);
    Right.push(Infinity);

    for (k; k < totLen; k++) {
        if (Left[i] === Infinity) {
            A[k] = Right[j];
            j++;
            continue;
        }

        if (Right[j] === Infinity) {
            A[k] = Left[i];
            i++;
            continue;
        }

        if (Left[i] <= Right[j]) {
            A[k] = Left[i];
            i++;
        } else {
            A[k] = Right[j];
            j++;
        }
    }

    return A;
}

function splitAndSort(A, p, q, r) {
    var lMax = q - p + 1;
    var rMax = r - q;
    var Left = [];
    var Right = [];

    for (var i = 0; i < lMax; i++) {
        Left[i] = A[p + i];
    }
    for (i = 0; i < rMax; i++) {
        Right[i] = A[q + i + 1];
    }

    insertionSort(Left);
    insertionSort(Right);
    return mergePresorted(Left, Right);
}

function mergeSort(A, split) {
    var len  = A.length,
        half = Math.floor(len/2),
        split = split || 32,
        Left,
        Right;
    
    if (len <= split) {
        return splitAndSort(A, 0, half, len - 1);
    }

    Left = mergeSort(A.slice(0, half), split);
    Right = mergeSort(A.slice(half), split);
    return mergePresorted(Left, Right);
}

module.exports = mergeSort;