import { serializable, serialize } from '../decorators/serializable.decorator';

@serializable('ST')
export class Student {
  @serialize('Language') public lang = 'JavaScript';

  @serialize('Name') public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}
