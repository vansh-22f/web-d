// An Iterator is an object that defines a method:
// next() that returns an object with two properties:
// value: the next value in the sequence
// done: a boolean indicating whether the sequence has been fully iterated
// { value: any, done: boolean }

// Why Iterators Exist?
for (let value of array) {
  console.log(value);
}
// behind the scenes
array[Symbol.iterator]() //→ returns iterator
iterator.next()// → gets next value

