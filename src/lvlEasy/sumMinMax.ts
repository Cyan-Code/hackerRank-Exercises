
function miniMaxSum(arr: number[]): void {
  
  const quickSort = (arr:number[]): number[] => {
    const arrm:number[] = [];
    const right:number[] = [];
    const left:number[] = [];
    const pivot:number = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        left.push(arr[i])
      }
    }
    return arrm.concat(quickSort(left), pivot, quickSort(right));
  }
  console.log(quickSort);
}

miniMaxSum([-5,10, 3, 5, 8, 1, 9])

