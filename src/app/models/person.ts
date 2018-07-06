import { readonly } from '../decorators/readonly.decorator';
import { time } from '../decorators/time.decorator';
import { log } from '../decorators/log.decorator';
import { NotNull } from '../decorators/not-null.decorator';

export class Person {
  constructor(public readonly id: number, public name: string) {}

  @log
  // @readonly
  @time
  sayHi() {
    console.log('Hi');
  }

  @time
  sayBye() {
    console.log('Bye');
  }
  
  @log
  @NotNull
  saySomething(something: string): string {
    console.log(2)
    return this.name + ' says: ' + something;
  }
}
