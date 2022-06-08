### Problema de ecuacion de velocidad
```js
/**
 * Problema de velocidad
 * ? La solucion se hallo pensando en una ecuacion que resolvia:
 * ? x1 + n * v1 = x2 + n * v2, donde se despejaba la n
 * ? la cual nos decia, que cantidad de saltos eran necesarios para
 * ? que X1 alcanzara a X2. Si su modulo daba cero, significaba que
 * ? era alcanzable, si no, no.
 */

const kangaroo = (x1 = 0, v1= 0, x2 = 0, v2 = 0) => {
    if (v1<v2) return 'NO';
    if ((x2-x1)%(v2-v1)===0) return 'YES';
    return 'NO'
}
console.log(kangaroo(0, 2, 5, 3))
```
