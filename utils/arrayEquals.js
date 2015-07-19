function arrayEquals(A, B) {
    var aLen = A.length,
        bLen = B.length,
        i = 0;

    if (aLen !== bLen) {
        return false;
    }

    for (i; i < aLen; i++) {
        if (A[i] !== B[i]) {
            return false;
        }
    }

    return true;
}

module.exports = arrayEquals;