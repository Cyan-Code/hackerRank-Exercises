
function miniMaxSum(arr: number[]): void {  
  let aux, i, j:number;
  let n:number = arr.length;
  for (i = 1; i < n; i++) {
    for (j = 0; j < (n-i); j++) {
      if (arr[j] > arr[j+1]) {
        aux = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = aux;
      }
    }
  }
  let sumMax:number = 0;
  for (let k = 1; k < arr.length; k++) {
    sumMax = sumMax + arr[k]
  }
  let sumMin:number = 0;
  for (let k = 0; k < (arr.length-1); k++) {
    sumMin = sumMin + arr[k]
  }
  console.log(sumMin, sumMax);
}
miniMaxSum([5, 4, 3, 2, 1]);

