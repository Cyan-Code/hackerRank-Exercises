"use strict";
function miniMaxSum(arr) {
    var max = arr[0];
    var counter = 0;
    for (var k = 0; k < arr.length; k++) {
        if (max < arr[k]) {
            max = arr[k];
        }
    }
    arr.find(function (element) {
        if (element === max) {
            counter++;
        }
    });
    console.log(counter);
}
miniMaxSum([5, 4, 5, 3, 2, 1, 10, 10, 10]);
