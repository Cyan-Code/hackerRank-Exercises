
function miniMaxSum(arr: number[]): void {  
  let max:number = arr[0];
  let counter:number = 0;
  for (let k = 0; k < arr.length; k++) {
    if (max<arr[k]) {
      max = arr[k];
    }
  }
  arr.find( element => {
    if (element === max) {
      counter++
    }
  })
  console.log(counter);
}
miniMaxSum([5, 4, 5, 3, 2, 1, 10, 10,10]);

