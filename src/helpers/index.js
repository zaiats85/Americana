export default class helpers {

	/*Return the first item in an array. Is useful when you need to separate the first item from the rest of the array items.
	To do this, we make use of destructuring assignment.*/

	head = ([x]) => x

	/*Return all but the first item in an array.*/
	tail = ([, ...xs]) => xs

	/*Return if argument supplied is defined.*/
	def = x => typeof x !== 'undefined'

	/*Return if argument supplied is undefined.*/
	undef = x => !def(x)

	/*Returns a copy of an array without using Array.slice(). Makes use of spread.*/
	copy = array => [...array]

	/*Return the length of an array. This is a very simple form oflooping through
	an array with recursion, even though the values of the array don’t
	matter in this case (increments up starting at 1 for every item in array).
	We include the len param to avoid tail recursion.*/
	length = ([x, ...xs], len = 0) => def(x) ? length(xs, len + 1) : len

	/*Return a reversed array.*/
	reverse = ([x, ...xs]) => def(x) ? [...reverse(xs), x] : []

	/*Returns a new array that contains the first n items of the given array.*/
	first = ([x, ...xs], n = 1) => def(x) && n ? [x, ...first(xs, n - 1)] : []

	/*Returns a new array that contains the last n items of the given array.*/
	last = (xs, n = 1) => reverse(first(reverse(xs), n))

	/*Returns a new array with value inserted at given index.*/
	slice = ([x, ...xs], i, y, curr = 0) => def(x)
		? curr === i
			? [y, x, ...slice(xs, i, y, curr + 1)]
			: [x, ...slice(xs, i, y, curr + 1)]
		: []

	/*Returns if the value supplied is an array. Allows us to write Array.isArray() in a more functional manner.*/
	isArray = x => Array.isArray(x)

	/*Combines nested arrays into a single array.*/
	 flatten = ([x, ...xs]) => def(x)
		? isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]
		: []

	/*Return a new array with 2 items swapped based on their index.*/
	swap = (a, i, j) => (
		map(a, (x,y) => {
			if(y === i) return a[j]
			if(y === j) return a[i]
			return x
		})
	)

	/*From MDN: “…creates a new array with the results of calling a provided function on every element in this array.”*/
	map = ([x, ...xs], fn) => {
		if (undef(x)) return []
		return [fn(x), ...map(xs, fn)]
	}

	/*From MDN: “…creates a new array with all elements that pass the test implemented by the provided function.”*/
	filter = ([x, ...xs], fn) => {
		if (undef(x)) return []
		if (fn(x)) {
			return [x, ...filter(xs, fn)]
		} else {
			return [...filter(xs, fn)]
		}
	}

	/*The opposite of filter, returns an array that does not pass the filter function.*/

	reject = ([x, ...xs], fn) => {
		if (undef(x)) return []
		if (!fn(x)) {
			return [x, ...reject(xs, fn)]
		} else {
			return [...reject(xs, fn)]
		}
	}

	/*Splits an array into two arrays. One whose items pass a filter function and one whose items fail.*/
	partition = (xs, fn) => [filter(xs, fn), reject(xs, fn)]

	/*From MDN: “…applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.”*/

	 reduce = ([x, ...xs], fn, memo, i) => {
		if (undef(x)) return memo
		return reduce(xs, fn, fn(memo, x, i), i + 1)
	}

/*	Similar to reduce, but applies the function from right-to-left.*/

	reduceRight = (xs, fn, memo) => reduce(reverse(xs), fn, memo)

	/*Partially apply a function by filling in any number of its arguments.*/
	partial = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs)

	/*Convert function that takes an array to one that takes multiple arguments. This is useful when partially applying.*/
	spreadArg = (fn) => (...args) => fn(args)

	/*Reverse function argument order.*/
	reverseArgs = (fn) => (...args) => fn(...reverse(args))

	/*Extract property value from array. Useful when combined with the map function.*/
	pluck = (key, object) => object[key]

	/*Each function consumes the return value of the function that came before.*/
	flow = (...args) => init => reduce(args, (memo, fn) => fn(memo), init)

	/*The same as flow, but arguments are applied in the reverse order. Compose matches up more naturally with how functions are written. Using the same data as defined for the flow function:*/
	compose = (...args) => flow(...reverse(args))

	/*Return the smallest number in an array. Returns Infinity if array supplied is empty.*/
	min = ([x, ...xs], result = Infinity) => def(x)
		? x < result
			? min(xs, x)
			: result
		: result

	/*Return the largest number in an array. Returns -Infinity if array supplied is empty.*/
	max = ([x, ...xs], result = -Infinity) => def(x)
		? x > result
			? max(xs, x)
			: max(xs, result)
		: result

	/*Returns the factorial of a number. Uses an accumulator to allow replacing of stack frames to allow larger factorials to be returned.*/
	factorial = (x, acum = 1) => x ? factorial(x - 1, x * acum) : acum

	/*Returns the Fibonacci number at the given place.*/
	fib = x => x > 2 ? fib(x - 1) + fib(x - 2) : 1

	/*Sort an array from smallest to largest. This is done by re-ordering the array so that it contains two sub-arrays, one with smaller values, the other with larger values. The above steps are recursively applied to each sub-array until there are no arrays left, which is flatten to return a sorted array.*/
	quicksort = (xs) => length(xs)
		? flatten([
			quicksort(filter(tail(xs), x => x <= head(xs))),
			head(xs),
			quicksort(filter(tail(xs), x => x > head(xs)))
		])
		: []

