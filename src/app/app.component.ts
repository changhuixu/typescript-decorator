import { Component } from './decorators/component.decorator';
import { NotNull } from './decorators/not-null.decorator';
import { Store } from './store/store';
import { Action } from './store/action';
import { deprecated } from './decorators/deprecated.decorator';

@Component({
  selector: 'rainbow',
  template: `<div class="box"></div>`
})
export class App {
  static tagName: string;

  constructor() {}

  onInit(): void {
    this.test(13098);
    this.test2();
    this.storeTest();
  }

  afterViewInit(): void {
    setInterval(() => {
      Array.from(document.querySelectorAll('.box')).forEach(
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

  @deprecated()
  private test2() {
    console.log('test2');
  }

  private storeTest() {
    let s = new Store();
    console.log('Store before action: ', Store.data);
    new Action({ name: 'TEST' });
    console.log('Store after action: ', Store.data);
  }
}
