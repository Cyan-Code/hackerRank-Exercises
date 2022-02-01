"use strict";
function miniMaxSum(arr) {
    var aux, i, j;
    var n = arr.length;
    for (i = 1; i < n; i++) {
        for (j = 0; j < (n - i); j++) {
            if (arr[j] > arr[j + 1]) {
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    var sumMax = 0;
    for (var k = 1; k < arr.length; k++) {
        sumMax = sumMax + arr[k];
    }
    var sumMin = 0;
    for (var k = 0; k < (arr.length - 1); k++) {
        sumMin = sumMin + arr[k];
    }
    console.log(sumMin, sumMax);
}
miniMaxSum([5, 4, 3, 2, 1]);
