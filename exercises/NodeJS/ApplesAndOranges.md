### Contador de Manzanas y Naranjas

```js
/**
 * Calcular cuantas manzanas o naranjas cayeron dentro de la casa
 * que esta dentro de un campo. Que va desde -x a x
 * 1. Tenemos la distancia que cubre la casa en ese campo
 * 2. Tenemos la distancia del campo a -> b
 * 3. Tenemos la cantidad de manzanas y naranjas
 * 4. Tenemos las coordenadas en X de la distancia de caida de las M y N
 * 5. Tenemos en los extremos del campo dos arboles, estos seran a y b (m y n) respectivamente
 * TODO: Se quiere calcular cuantas M y N, cayeron dentro del campo
 * s y t -> Albergadura de la casa
 * a y b -> arboles de manzana y naranjas (respectivamente) -> tambien es la longitud del campo
 * ? Restricciones* ?
 * a<s<t<b
 */
const countApplesAndOranges = (s = 0, t = 0, a = 0, b = 0, apples = [], oranges = []) => {
    if (!(a<s<t<b)) throw new Error('Invalid Input');
    let countApples = 0;
    let countOranges = 0;
    apples.forEach((apple)=>{
        if (a+apple >= s && a+apple <= t) {
            countApples ++;
        }
    })
    oranges.forEach((orange)=>{
        if (orange+b >= s && orange+b <= t) {
            countOranges ++;
        }
    })
    console.log(countApples)
    console.log(countOranges)
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
```
