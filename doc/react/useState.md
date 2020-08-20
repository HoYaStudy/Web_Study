# useState Hook

Component에 상태값을 추가할 때 사용한다.

useState hook은 상태값과 상태값 변경 함수를 배열로 return한다.

React는 상태값 변경 함수가 호출되면 해당 component를 다시 rendering 하며, 이 때 자식 component도 같이 rendering된다.

React는 가능하면 상태값 변경을 batch로 처리한다.

상태값 변경 함수는 비동기로 처리되지만 순서가 보장된다.

```js
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
```
