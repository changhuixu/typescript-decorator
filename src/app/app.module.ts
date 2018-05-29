import { TodoListComponent } from './components/todo-list.component';

export class AppModule {
  COMPS: any[] = [TodoListComponent];

  bootstrap() {
    this.COMPS.forEach(comp => {
      Array.from(document.querySelectorAll(comp.selector)).forEach(
        (node: HTMLElement) => {
          const instance = new comp();
          node.innerHTML = comp.template(instance);

          Object.keys(instance._events).forEach(type => {
            (<EventTarget>node).addEventListener(
              type,
              (e: any) => {
                instance._events[type].forEach((item: any) => {
                  if (e.target.matches(item.selector)) {
                    const refreshView = item.fn.call(instance, e);
                    if (refreshView) node.innerHTML = comp.template(instance);
                  }
                });
              },
              false
            );
          });
        }
      );
    });
  }
}
