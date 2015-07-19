function copyArray(array) {
    var len = array.length,
        newArray = [],
        i;

    for (i = 0; i < len; i++) {
        newArray[i] = array[i];
    }

    return newArray;
}

module.exports = copyArray;