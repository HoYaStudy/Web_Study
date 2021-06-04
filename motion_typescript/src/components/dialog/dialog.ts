import { BaseComponent, IComponent } from "../component.js";
import { IComposable } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface IMediaData {
  readonly title: string;
  readonly url: string;
}

export interface ITextData {
  readonly title: string;
  readonly content: string;
}

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements IComposable {
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;

  constructor() {
    super(`
      <section class="dialog">
        <div class="dialog__container">
          <button class="close">&times;</button>
          <div id="dialog__body"></div>
          <button class="dialog__submit">Add</button>
        </div>
      </section>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };

    const submitBtn = this.element.querySelector(
      ".dialog__submit"
    )! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: IComponent) {
    const body = this.element.querySelector("#dialog__body")! as HTMLElement;
    child.attachTo(body);
  }
}
