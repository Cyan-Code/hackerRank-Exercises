### Redondeando notas a sus proximos multiplos de 5

```js
/**
 * 1. Grado de 0 a 100
 * 2. Debajo de 40, perdido el grado
 * 3. Se redondea a cada multiplo de 5 mas proximo a la nota segun estas reglas
 *    - la diferencia entre la el proximo multiplo y la nota debe ser menor a 3
 *    - si la nota es menor a 38 ya no se puede redondear, porque ya esta perdida la nota
 * ! Como se formulo el problema? !
 * ? con el modulo, el modulo me dictaba cuan POR DEBAJO estoy de un multiplo de 5
 * ? Si restaba el modulo, con 5, me decia a cuanta "distancia" tenia del SIGUIENTE multiplo de 5 ?
 * ? Y asi, resolvi la logica ?
 */

const number = (grades = []) => {
    const finalGrades = grades.map((grade)=>{
        if (grade%5===0 || grade<38 || (5-(grade%5))>=3) return grade+0;
        return grade + (5-(grade%5));
    })
    return finalGrades;
}
console.log(number([73, 67, 38, 33]))
```
