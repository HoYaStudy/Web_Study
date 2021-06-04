export interface IComponent {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
  attach(component: IComponent, position?: InsertPosition): void;
  registerEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
  ): void;
}

export class BaseComponent<T extends HTMLElement> implements IComponent {
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement("template");
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error("Error: Parent mismatch");
    }
    parent.removeChild(this.element);
  }

  attach(component: IComponent, position: InsertPosition = "afterbegin") {
    component.attachTo(this.element, position);
  }

  registerEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
  ): void {
    this.element.addEventListener(type, listener);
  }
}
