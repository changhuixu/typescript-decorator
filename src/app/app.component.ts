import { Component } from './decorators/component.decorator';

@Component({
  selector: 'rainbow'
})
export class App {
  static tagName: string;

  constructor() {}

  onInit(): void {
    const components = document.getElementsByClassName(App.tagName);
    setInterval(() => {
      if (components.length) {
        Array.from(components).forEach(
          (x: HTMLElement) => (x.style.borderColor = this.randomColor())
        );
      }
    }, 800);
  }

  private randomColor(): string {
    return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  }
}
