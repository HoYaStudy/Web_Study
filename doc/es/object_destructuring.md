# Object Destructuring

Object의 여러 속성 값을 변수로 쉽게 할당할 수 있는 문법이다.

```js
// Property의 순서는 중요하지 않다.

const obj = { width: 20, height: 30 };
const { height, width } = obj;

console.log(`width: ${width}, height: ${height}`);
// width: 20, height: 30
```

```js
// Property를 원하는 이름으로 변경할 수 있다.

const obj = { width: 20, height: 30 };
const { width: w, height: h } = obj;

console.log(`width: ${w}, height: ${h}`);
// width: 20, height: 30
```

```js
// Property에 기본값을 설정할 수 있다.

const obj = { width: undefined, height: null, color: "red" };
const { width = 10, height = 20, color = "white" } = obj;

console.log(`width: ${width}, height: ${height}, color: ${color}`);
// width: 10, height: null, color: red
```

```js
// Property에 함수의 return value를 기본값으로 설정할 수 있다.
// 이 경우, 기본값이 필요한 경우에만 함수가 호출이 된다.

function getDefaultWidth() {
  return 10;
}

const obj = { width: undefined, height: 30 };
const { width: w = getDefaultWidth(), height: h } = obj;

console.log(`width: ${w}, height: ${h}`);
// width: 10, height: 30
```

```js
// 사용되지 않은 property를 별도의 object로 생성할 수 있다.

const obj = { width: 20, height: 30, color: "red", isFill: true };
const { width, height, ...remainedProps } = obj;

console.log(`width: ${width}, height: ${height}`);
// width: 10, height: null, color: red
console.log(`remained properties: `, remainedProps);
// remained properties: {color: "red", isFill: true}
```

```js
// 중첩된 object도 destructuring을 할 수 있다.

const obj = { id: 10, score: { first: 70, second: 80 } };
const {
  id,
  score: { first, second },
} = obj;

console.log(`id: ${id}, 1st score: ${first}, 2nd score: ${second}`);
// id: 10, 1st score: 70, 2nd score: 80
console.log(`score: ${score}`);
// => Uncaught ReferenceError
```

```js
// Computed property를 사용할 수 있다.
// 이 때, 반드시 별칭을 사용해야 한다.
// 별칭에는 변수 뿐만이 아니고, 객체의 속성이나 배열의 원소도 사용할 수 있다.

const obj = { prop1: 10, prop2: 20 };
const index = 2;
const { [`prop${index}`]: value2, prop1 } = obj;

console.log(`prop1: ${prop1}, prop2: ${value2}`);
// prop1: 10, prop2: 20
```
