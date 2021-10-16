import Fibonacci from "fibonacci";

const getFibonacci = (fibo) => {
  console.log(
    "number of Fibonacci calculation is a hard process: please rendered only if necessary"
  );
  return Fibonacci.iterate(fibo).number;
};

export default getFibonacci;
