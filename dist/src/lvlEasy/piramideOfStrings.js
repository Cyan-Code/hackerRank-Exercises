"use strict";
function plusMinus(n) {
    for (var i = 1; i <= n; i++) {
        var j = n - i;
        console.log(' '.repeat(j) + '*'.repeat(i));
    }
}
plusMinus(6);
