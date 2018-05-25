import { Component } from './decorators/component.decorator';
import { NotNull } from './decorators/not-null.decorator';
import { Store } from './store/store';
import { Action } from './store/action';

@Component({
  selector: 'rainbow',
  template: `<div class="rainbow"></div>`
})
export class App {
  static tagName: string;

  constructor() {}

  onInit(): void {
    this.test(13098);

    this.storeTest();
  }

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

  @NotNull
  private test(n: number) {
    console.log(n);
  }

  private storeTest() {
    let s = new Store();
    console.log('Store before action: ', Store.data);
    new Action({ name: 'TEST' });
    console.log('Store after action: ', Store.data);
  }
}
