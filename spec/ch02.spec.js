describe("Sort tests", function () {
    var u = require('../utils');
    var methods = require('../src').ch02;
    var N, A, B;

    beforeEach(function () {
        N = 1000;
        A = u.randomArray(N);
        B = u.copyArray(A);
        B.sort(u.compareInt);
    });

    it("Performs insertion sort correctly", function () {
        methods.insertionSort(A);
        expect(u.arrayEquals(A, B)).toBe(true);
    });

    it("Performs merge sort correctly", function () {
        A = methods.mergeSort(A);
        expect(u.arrayEquals(A, B)).toBe(true);
    });
});