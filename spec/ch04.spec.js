describe('Maximum Subarray problem', function () {
    var utils = require('../utils');
    var methods = require('../src/ch04');
    var N, testArrays;

    beforeEach(function () {
        testArrays = [
            {
                array: [1, 2, 3, 4, 5],
                crossLow: 0,
                crossHigh: 4,
                crossMax: 15,
                realLow: 0,
                realHigh: 4,
                realMax: 15
            },{
                array: [0, -100, 1, 2, 3],
                crossLow: 2,
                crossHigh: 4,
                crossMax: 6,
                realLow: 2,
                realHigh: 4,
                realMax: 6
            },{
                array: [-10, -10, 10, -10, -10],
                crossLow: 2,
                crossHigh: 3,
                crossMax: 0,
                realLow: 2,
                realHigh: 2,
                realMax: 10
            }
        ];
    });

    it('Finds the max subarray that crosses the middle of the array', function () {
        testArrays.forEach(function (testArr) {
            var array = testArr.array;
            var result = methods.maxCrossingSubarray(array);
            var { lowIndex, highIndex, maxVal } = result;

            expect(testArr.crossLow).toBe(lowIndex);
            expect(testArr.crossHigh).toBe(highIndex);
            expect(testArr.crossMax).toBe(maxVal);
        });
    });

    it('Finds the maximum subarray', function () {
        testArrays.forEach(function (testArr) {
            var array = testArr.array;
            var result = methods.maxSubarray(array);
            var { lowIndex, highIndex, maxVal } = result;

            expect(testArr.realLow).toBe(lowIndex);
            expect(testArr.realHigh).toBe(highIndex);
            expect(testArr.realMax).toBe(maxVal);
        })

        var result = methods.maxSubarray([-2,1,-3,4,-1,2,1,-5,4]);
        var { lowIndex, highIndex, maxVal } = result;

        expect(lowIndex).toBe(3);
        expect(highIndex).toBe(6);
        expect(maxVal).toBe(6);
    });
});