
function miniMaxSum(arr: number[]): void {  
  let aux:number;
  let i:number;
  let j:number;
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
  console.log(arr);
}
miniMaxSum([-5 ,10, 3, 5, 8, 1, 9]);

