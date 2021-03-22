function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const obj = {
  name: "HoYa",
  age: 18,
};

const obj2 = {
  key: true,
};

console.log(getValue(obj, "name"));
console.log(getValue(obj, "age"));
console.log(getValue(obj2, "key"));
