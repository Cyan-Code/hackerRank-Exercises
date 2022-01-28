"use strict";
function miniMaxSum(arr) {
    var aux;
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i); j++) {
            if (arr[i] > arr[i + 1]) {
                aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
            }
        }
    }
    console.log(arr);
}
miniMaxSum([10, 3, 5, 8, 1, 9]);
