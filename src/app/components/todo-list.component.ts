import { event } from '../decorators/event.decorator';
import { Todo } from '../models/todo';
import { ComponentWithInterpolation } from '../decorators/component-with-interpolation.decorator';

@ComponentWithInterpolation({
  selector: 'my-app',
  template: `
  <h1> Todo list </h1>
  <label for="todo-desc">New</label> <input type="text" id="todo-desc" />
  <ul style="padding-left: 20px;">
  <% todos.forEach(todo => { %>
    <li style='text-align: left; text-decoration: <%= todo.done ? "line-through" : "none" %>'>
      <%= todo.description %>
    </li>
  <% }); %>
  </ul>`
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor() {
    this.todos.push({ description: 'todo 1', done: false });
    this.todos.push({ description: 'todo 2', done: false });
  }

  @event('click', 'li')
  handleClick(e: MouseEvent) {
    const todo = this.todos.filter(
      todo => todo.description === (<HTMLElement>e.target).innerText.trim()
    )[0];
    todo.done = !todo.done;
    return true;
  }

  @event('keypress', 'input')
  handleKeypress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.todos.push({
        description: (<HTMLInputElement>e.target).value,
        done: false
      });
      return true;
    }
    return false;
  }
}
