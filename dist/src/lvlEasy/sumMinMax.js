"use strict";
function timeComverter(s) {
    var momentDay = s.charAt(8);
    var format = '';
    switch (momentDay) {
        case 'A':
            {
                /TODO:  expresion regular par el Numero 12/;
            }
            break;
        case 'P':
            break;
        default:
            break;
    }
    return format;
}
console.log(timeComverter('00:00:00AM'));
