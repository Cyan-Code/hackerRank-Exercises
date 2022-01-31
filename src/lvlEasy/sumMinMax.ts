
function miniMaxSum(arr: number[]): void {  
  /* let aux, i, j:number;
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
  console.log(arr); */
  let menor:number=arr[0];
  let mayor:number=arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1]<menor) {
      menor = arr[i+1]
    } else if (arr[i+1]>mayor) {
      mayor = arr[i+1]
    }
  }
  console.log(menor, mayor);
}
miniMaxSum([-5 ,10, 3, 5, 8, 1, 9]);

