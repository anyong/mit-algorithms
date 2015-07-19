function randomArray(N) {
    var array = [],
        i     = 0;

    for (i; i < N; i++) {
        array.push(Math.floor((Math.random() * N * 100) + 1));
    }

    return array;
}

module.exports = randomArray;