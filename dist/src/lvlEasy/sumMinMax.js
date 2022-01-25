"use strict";
function miniMaxSum(arr) {
    var quickSort = function (arr) {
        var arrm = [];
        var right = [];
        var left = [];
        var pivot = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > pivot) {
                right.push(arr[i]);
            }
            else {
                left.push(arr[i]);
            }
        }
        return arrm.concat(quickSort(left), pivot, quickSort(right));
    };
    console.log(quickSort);
}
miniMaxSum([-5, 10, 3, 5, 8, 1, 9]);
