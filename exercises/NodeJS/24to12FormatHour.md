### Formato de 12 horas a formato de 24 Horas


### Code:
~~~
const conversor = (s='') => {
    if (    s.length === 9 ||
            parseInt(s.slice(0, 2))>13 ||
            parseInt(s.slice(3, 5))>59 ||
            parseInt(s.slice(6, 8))>59 ) throw new Error('Format invalid');
    const sliceHour = s.slice(2,8);
    if (s.endsWith('PM')) {
        if (s.startsWith('12')) { return s.slice(0, 8) }
        else {
            const parse2First = parseInt(s.slice(0,2));
            const hourConverted = (parse2First+12).toString();
            return hourConverted.concat(sliceHour);
        }
    } else if(s.endsWith('AM')) {
        if (s.startsWith('12')) return "".concat('00', sliceHour)
        else { return s.slice(0,8) }
    }
}

conversor('12:51:21PM');
~~~
