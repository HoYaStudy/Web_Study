import { IDraggable, IDroppable, IHoverable } from "../components/common/type";
import { IComponent } from "./../components/component";

type GConstructor<T = {}> = new (...args: any[]) => T;
type DraggableClass = GConstructor<IComponent & IDraggable>;
type DragHoverClass = GConstructor<IComponent & IHoverable>;
type DropTargetClass = GConstructor<IComponent & IDroppable>;

export function Draggable<TBase extends DraggableClass>(Base: TBase) {
  return class DraggableItem extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.registerEventListener("dragstart", (event: DragEvent) => {
        this.onDragStart(event);
      });
      this.registerEventListener("dragend", (event: DragEvent) => {
        this.onDragEnd(event);
      });
    }
  };
}

export function Hoverable<TBase extends DragHoverClass>(Base: TBase) {
  return class DragHoverArea extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.registerEventListener("dragenter", (event: DragEvent) => {
        event.preventDefault();
        this.onDragEnter(event);
      });
      this.registerEventListener("dragleave", (event: DragEvent) => {
        this.onDragLeave(event);
      });
    }
  };
}

export function Droppable<TBase extends DropTargetClass>(Base: TBase) {
  return class DropArea extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.registerEventListener("dragover", (event: DragEvent) => {
        event.preventDefault();
        this.onDragOver(event);
      });
      this.registerEventListener("drop", (event: DragEvent) => {
        event.preventDefault();
        this.onDrop(event);
      });
    }
  };
}
