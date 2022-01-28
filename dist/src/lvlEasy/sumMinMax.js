"use strict";
function miniMaxSum(arr) {
    var aux;
    var i;
    var j;
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
    console.log(arr);
}
miniMaxSum([-5, 10, 3, 5, 8, 1, 9]);
