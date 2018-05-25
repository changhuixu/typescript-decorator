import { Component } from './decorators/component.decorator';

@Component({
  selector: 'rainbow',
  template: `<div class="rainbow"></div>`
})
export class App {
  static tagName: string;

  constructor() {}

  onInit(): void {}

  afterViewInit(): void {
    setInterval(() => {
      Array.from(document.querySelectorAll('.rainbow')).forEach(
        (x: HTMLElement) => (x.style.borderColor = this.randomColor())
      );
    }, 800);
  }

  private randomColor(): string {
    return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  }
}
