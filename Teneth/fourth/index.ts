
interface MathOperation {
    (x: number, y: number): number;
  }
  const add: MathOperation = (x, y) => x + y;
  const result = add(10, 20);
  console.log(result); // Output: 30
  