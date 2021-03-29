import { IComponent } from "./components/component.js";
import {
  IMediaData,
  InputDialog,
  ITextData,
} from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ToDoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  IComposable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";

type InputComponentConstructor<T = (IMediaData | ITextData) & IComponent> = {
  new (): T;
};

class App {
  private readonly page: IComponent & IComposable;

  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>(
      "#new-image",
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaSectionInput>(
      "#new-video",
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-note",
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.content)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-todo",
      TextSectionInput,
      (input: TextSectionInput) => new ToDoComponent(input.title, input.content)
    );

    this.page.addChild(
      new ImageComponent("Image Title 1", "https://picsum.photos/800/400")
    );
    this.page.addChild(
      new VideoComponent("Video Title 1", "https://youtu.be/D7cwvvA7cP0")
    );
    this.page.addChild(new NoteComponent("Note Title 1", "Note1"));
    this.page.addChild(new NoteComponent("ToDo Title 1", "ToDo1"));
    this.page.addChild(
      new ImageComponent("Image Title 2", "https://picsum.photos/800/400")
    );
    this.page.addChild(
      new VideoComponent("Video Title 2", "https://youtu.be/C6c2vdA7cP1")
    );
    this.page.addChild(new NoteComponent("Note Title 2", "Note2"));
    this.page.addChild(new NoteComponent("ToDo Title 2", "ToDo2"));
  }

  private bindElementToDialog<T extends (IMediaData | ITextData) & IComponent>(
    selector: string,
    inputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => IComponent
  ) {
    const btnElement = document.querySelector(selector)! as HTMLButtonElement;
    btnElement.addEventListener("click", () => {
      const dialog = new InputDialog();
      const component = new inputComponent();
      dialog.addChild(component);
      dialog.attachTo(this.dialogRoot);
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const section = makeSection(component);
        this.page.addChild(section);

        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
