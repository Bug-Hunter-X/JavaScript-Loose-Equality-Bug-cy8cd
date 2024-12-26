function foo(x) {
  if (x == null) {
    return 0; //this is the bug line
  }
  return x + 1;
}
console.log(foo(null)); //output 0
console.log(foo(undefined)); //output NaN