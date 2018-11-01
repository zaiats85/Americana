export default class Helpers {

  /*Return the first item in an array. Is useful when you need to separate the first item from the rest of the array items.
  To do this, we make use of destructuring assignment.*/

  static head([x]) {
    return x
  };

  /*Return all but the first item in an array.*/
  static tail([, ...xs]) {
    return xs
  }

  /*Return if argument supplied is defined.*/
  static def(x) {
    return typeof x !== 'undefined';
  }

  /*Return if argument supplied is undefined.*/
  static undef(x) {
    return !Helpers.def(x);
  }

  /*Returns a copy of an array without using Array.slice(). Makes use of spread.*/
  static copy(array) {
    return [...array];
  }

  /*Return the length of an array. This is a very simple form oflooping through
  an array with recursion, even though the values of the array don’t
  matter in this case (increments up starting at 1 for every item in array).
  We include the len param to avoid tail recursion.*/
  static length([x, ...xs], len = 0){
    return Helpers.def(x) ? Helpers.length(xs, len + 1) : len;
  }

  /*Return a reversed array.*/
  static reverse([x, ...xs]){
    return Helpers.def(x) ? [...Helpers.reverse(xs), x] : [];
  }

  /*Returns a new array that contains the first n items of the given array.*/
  static first([x, ...xs], n = 1){
    return Helpers.def(x) && n ? [x, ...Helpers.first(xs, n - 1)] : [];
  }

  /*Returns a new array that contains the last n items of the given array.*/
  static last(xs, n = 1){
    return Helpers.reverse(Helpers.first(Helpers.reverse(xs), n));
  }

  /*Returns a new array with value inserted at given index.*/
  static slice([x, ...xs], i, y, curr = 0) {
    return Helpers.def(x)
      ? curr === i
      ? [y, x, ...Helpers.slice(xs, i, y, curr + 1)]
      : [x, ...Helpers.slice(xs, i, y, curr + 1)]
      : [];
  }

  /*Returns if the value supplied is an array. Allows us to write Array.isArray() in a more functional manner.*/
  static isArray(x){
    return Array.isArray(x)
  };

  /*Combines nested arrays into a single array.*/
  static flatten([x, ...xs]){
   return Helpers.def(x)
      ? Helpers.isArray(x) ? [...Helpers.flatten(x), ...Helpers.flatten(xs)] : [x, ...Helpers.flatten(xs)]
      : [];
  }

  /*Return a new array with 2 items swapped based on their index.*/
  static swap(a, i, j){
    return Helpers.map(a, (x, y) => {
      if (y === i) return a[j];
      return x
    })
  };

  /*From MDN: “…creates a new array with the results of calling a provided function on every element in this array.”*/
  static map([x, ...xs], fn){
    if (Helpers.undef(x)) return [];
    return [fn(x), ...Helpers.map(xs, fn)]
  };

  /*From MDN: “…creates a new array with all elements that pass the test implemented by the provided function.”*/
  static filter([x, ...xs], fn){
    if (Helpers.undef(x)) return [];
    if (fn(x)) {
      return [x, ...Helpers.filter(xs, fn)]
    } else {
      return [...Helpers.filter(xs, fn)]
    }
  };

  /*The opposite of filter, returns an array that does not pass the filter function.*/
  static reject([x, ...xs], fn){
    if (Helpers.undef(x)) return [];
    if (!fn(x)) {
      return [x, ...Helpers.reject(xs, fn)]
    } else {
      return [...Helpers.reject(xs, fn)]
    }
  };

  /*Splits an array into two arrays. One whose items pass a filter function and one whose items fail.*/
  static partition(xs, fn){
    return [Helpers.filter(xs, fn), Helpers.reject(xs, fn)];
  };

  /*From MDN: “…applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.”*/
  static reduce([x, ...xs], fn, memo, i){
    if (Helpers.undef(x)) return memo;
    return Helpers.reduce(xs, fn, fn(memo, x, i), i + 1);
  };

  /*	Similar to reduce, but applies the function from right-to-left.*/
  static reduceRight(xs, fn, memo){
    return Helpers.reduce(Helpers.reverse(xs), fn, memo);
  }

  /*Partially apply a function by filling in any number of its arguments.*/
  /*partial = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs);*/
  static partial(fn, ...args){
    return (...newArgs) => fn(...args, ...newArgs)
  };

  /*Convert function that takes an array to one that takes multiple arguments. This is useful when partially applying.*/
  /*spreadArg = (fn) => (...args) => fn(args);*/
  static spreadArg(fn){
    return (...args) => fn(args);
  }

  /*Reverse function argument order.*/
  /*reverseArgs = (fn) => (...args) => fn(...reverse(args));*/
  static reverseArgs(fn){
    return (...args) => fn(...Helpers.reverse(args))
  };

  /*Extract property value from array. Useful when combined with the map function.*/
  static pluck(key, object){
    return object[key]
  };

  /*Each function consumes the return value of the function that came before.*/
  /*flow = (...args) => init => reduce(args, (memo, fn) => fn(memo), init);*/
  static flow(...args){
    return init => Helpers.reduce(args, (memo, fn) => fn(memo), init);
  }

  /*The same as flow, but arguments are applied in the reverse order. Compose matches up more naturally with how functions are written. Using the same data as defined for the flow function:*/
  /*compose = (...args) => flow(...reverse(args));*/
  static compose(...args){
    return Helpers.flow(...Helpers.reverse(args))
  };

  /*Return the smallest number in an array. Returns Infinity if array supplied is empty.*/
  static min([x, ...xs], result = Infinity){
    return Helpers.def(x)
      ? x < result
      ? Helpers.min(xs, x)
      : result
      : result;
  }

  /*Return the largest number in an array. Returns -Infinity if array supplied is empty.*/
  static max([x, ...xs], result = -Infinity) {
      return Helpers.def(x)
        ? x > result
          ? Helpers.max(xs, x)
          : Helpers.max(xs, result)
        : result;
  }

  /*Returns the factorial of a number. Uses an accumulator to allow replacing of stack frames to allow larger factorials to be returned.*/
  static factorial(x, acum = 1){
    return x ? Helpers.factorial(x - 1, x * acum) : acum
  };

  /*Returns the Fibonacci number at the given place.*/
  static fib(x){
    return x > 2 ? Helpers.fib(x - 1) + Helpers.fib(x - 2) : 1
  };

  /*Sort an array from smallest to largest. This is done by re-ordering the array so that it contains two sub-arrays, one with smaller values, the other with larger values. The above steps are recursively applied to each sub-array until there are no arrays left, which is flatten to return a sorted array.*/
  static quicksort(xs){
    console.log(xs[0]);
    return Helpers.length(xs)
      ? Helpers.flatten([
        Helpers.quicksort(Helpers.filter(Helpers.tail(xs), x => x <= Helpers.head(xs))),
        Helpers.head(xs),
        Helpers.quicksort(Helpers.filter(Helpers.tail(xs), x => x > Helpers.head(xs)))
      ])
      : []
  }
}
