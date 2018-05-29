import { Person } from '../models/person';
import { memoize } from '../decorators/memoize.decorator';
import { time } from '../decorators/time.decorator';

export class PersonsService {
  private readonly persons: Person[] = [
    new Person(1, 'first one'),
    new Person(2, 'second one'),
    new Person(3, 'third one')
  ];

  constructor() {}

  @time
  @memoize
  getPersons(): Person[] {
    this.sleep(2000);
    return this.persons;
  }

  @time
  @memoize
  getPerson(id: number): Person {
    this.sleep(2000);
    return this.persons.find(x => x.id === id);
  }

  private sleep(miliseconds: number) {
    const currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {}
  }
}
