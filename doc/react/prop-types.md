# Prop-Types

React의 공식 package로써, 속성 값의 type 정보를 정의할 때 사용한다.

## Installation

> $ yarn add -D prop-types

> $ npm i -D prop-types

## Usage

다음과 같이 type의 정보를 명확히 설정한다.

```js
import PropTypes from "prop-types";

const Type = ({ name, age, isMale, type, onChangeAge }) => {
  const onClick = (newAge) => {
    if (newAge) {
      onChangeAge(newAge);
    }
  };

  return (
    <div>{`name: ${name}, age: ${age}, isMale: ${isMale}, type: ${type}`}</div>
  );
};

Type.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMale: PropTypes.bool,
  type: PropTypes.oneOf([
    "American Cocker Spaniel",
    "Border Collie",
    "Dachshund"
  ]),
  onChangeAge: PropTypes.func
};
```

각 field에 정확한 type의 값이 들어있지 않다면 rendering 과정에서 wa message가 출력된다.

`isRequired`로 명시된 field에 부모 component에서 값을 넘겨주지 않으면 warning message가 출력된다.

단, 함수의 parameter와 return type에 대한 정보는 정의할 수 없다.

## Supported Type List

### `any`

Any data type.

### `array`

An array.

### `arrayOf(type)`

An array of a certain type.

### `bool`

A boolean.

### `element`

A react element.

### `elementType`

A react element type.

### `exact({property: type, ...})`

An object with warning on extra properties.

### `func`

A function.

### `instanceOf(class)`

An instance of the class.

### `node`

Anything that can be rendered. (number, string, element, array, etc)

### `number`

A number.

### `object`

An object.

### `objectOf(type)`

An object with property values of a certain type.

### `oneOf([type, ...])`

One of the specified types.

### `oneOfType([type, ...])`

One of the types of the prop-types.

### `shape({property: type, ...})`

An object taking on a particular shape.

### `string`

A string.

### `symbol`

A symbol.

## User Defined Type

사용자가 직접 type을 정의해서 사용할 수도 있다.

```js
customProp: function(props, propName, componentName) {
  if (!/matchme/.test(props[propName])) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName} Validation failed.`
    );
  }
}
```

`arrayOf`, `objectOf` 등을 사용하여 확장할 수도 있다.

```js
customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
  if (!/matchme/.test(propValue[key])) {
    return new Error(
      `Invalid prop ${propFullName} supplied to ${componentName} Validation failed.`
    );
  }
})
```
