import { App } from './app/app.component';
import { Person } from './app/models/person';
import { PersonsService } from './app/services/persons.service';
import { AppModule } from './app/app.module';
import { Student } from './app/models/student';

function main() {
  // const app = new App();
  // app.onInit();
  // app.afterViewInit();
  
  new AppModule().bootstrap();

  // const s = new Student('John');
  // console.log(s);
  // console.log(JSON.stringify(s));

  // const p = new Person(1, 'asd');
  // console.log(0);
  // // p.saySomething('I love playing toys');
  // p.sayBye();
  // p.sayBye();
  // p.saySomething(null);   // NotNull

    // p.sayHi();

    // p.sayBye();
    // p.sayBye();
  //   p.sayHi = () => console.log('hello');
  //   p.sayHi();

  // memoize()
  // const svc = new PersonsService();
  // svc.getPerson(1);
  // svc.getPerson(1);
  // svc.getPerson(1);
  // svc.getPersons();
  // svc.getPersons();
}

main();
