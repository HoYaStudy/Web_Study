interface IStack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class Stack<T> implements IStack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T): void {
    if (this.capacity === this.size) {
      throw new Error("Stack is full");
    }
    const node: StackNode<T> = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (!this.head) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stringStack = new Stack<string>(10);
stringStack.push("Item 1");
stringStack.push("Item 2");
stringStack.push("Item 3");
stringStack.push("Item 4");
while (stringStack.size !== 0) {
  console.log(stringStack.pop());
}

const numberStack = new Stack<number>(7);
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
numberStack.push(4);
while (numberStack.size !== 0) {
  console.log(numberStack.pop());
}
numberStack.pop();
