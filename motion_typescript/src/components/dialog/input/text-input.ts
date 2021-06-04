import { BaseComponent } from "../../component.js";
import { ITextData } from "../dialog.js";

export class TextSectionInput
  extends BaseComponent<HTMLElement>
  implements ITextData {
  constructor() {
    super(
      `<div>
        <div class="form__container">
          <label for="title">Title</label>
          <input type="text" id="title">
        </div>
        <div class="form__container">
          <label for="content">Content</label>
          <textarea type="text" id="content" row="3"></textarea>
        </div>
      </div>`
    );
  }

  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }

  get content(): string {
    const element = this.element.querySelector(
      "#content"
    )! as HTMLTextAreaElement;
    return element.value;
  }
}
