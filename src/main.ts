import { App } from './app/app.component';
import { Person } from './app/models/person';
import { PersonsService } from './app/services/persons.service';

function main() {
  // const app = new App();
  // app.onInit();
  // app.afterViewInit();

  const svc = new PersonsService();
  svc.getPerson(1);
  svc.getPerson(1);
  svc.getPerson(1);
  svc.getPersons();
  svc.getPersons();
  const p = new Person(1, 'asd');
  p.saySomething('I love playing halo');
  p.sayBye();
  //   p.sayHi();
  //   p.sayBye();
  //   p.sayBye();
  //   p.sayHi = () => console.log('hello');
  //   p.sayHi();
}

main();
