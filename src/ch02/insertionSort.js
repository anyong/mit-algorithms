function insertionSort(A) {
    var i, j, key;
    for (j = 1; j < A.length; j++) {
        key = A[j];
        i = j-1;
        while (i >= 0 && A[i] > key) {
            A[i+1] = A[i];
            i = i-1;
        }
        A[i+1] = key;
    }
}

module.exports = insertionSort;