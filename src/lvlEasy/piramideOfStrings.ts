function plusMinus(n: number): void {
  for (let i = 1; i <= n; i++) {
    let j:number = n-i;
    console.log(' '.repeat(j) + '*'.repeat(i));
  }
}

plusMinus(6)