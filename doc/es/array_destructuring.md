# Array Destructuring

Array의 여러 속성값을 변수로 쉽게 할당할 수 있는 문법이다.

```js
// 순서대로 할당이 된다.
const arr = [1, 2];
const [a, b] = arr;

console.log(`a: ${a}, b: ${b}`);
// a: 1, b: 2
```

```js
// 기본값을 적용할 수 있다.

const arr = [1];
const [a = 10, b = 20] = arr;

console.log(`a: ${a}, b: ${b}`);
// a: 1, b: 20
```

```js
// 일부 값을 건너뛸 수 있다.

const arr = [1, 2, 3];
const [a, , c] = arr;

console.log(`a: ${a}, c: ${c}`);
// a: 1, c: 3
```

```js
// 사용되지 않은 값을 새로운 배열로 생성할 수 있다.

const arr = [1, 2, 3, 4, 5];
const [a, b, ...remainedValues] = arr;

console.log(`a: ${a}, b: ${b}`);
// a: 1, b: 2
console.log(`remained values: ${remainedValues}`);
// remained values: 3, 4, 5
```

```js
// 중첩된 array도 destructuring을 할 수 있다.

const arr = [
  [11, 12, 13],
  [21, 22, 23],
];
const [[a1, a2, a3], [b1, b2, b3]] = arr;

console.log(`a1: ${a1}, a2: ${a2}, a3: ${a3}`);
// a1: 11, a2: 12, a3: 13
console.log(`b1: ${b1}, b2: ${b2}, b3: ${b3}`);
// b1: 21, b2: 22, b3: 23
```
