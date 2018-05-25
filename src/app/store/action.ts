import { UserStateModel } from './user-state-model';
import { Store } from './store';

interface Method<T> {
  (payload: T): void;
}

export class Action {
  private static methods: Method<UserStateModel>[] = [];

  public static register(method: Method<UserStateModel>) {
    this.methods.push(method);
  }

  constructor(payload: UserStateModel);
  constructor(store: Store, method: string);
  constructor(payload: any, method?: string, descriptor?: PropertyDescriptor) {
    console.log(descriptor);
    if (method) {
      //TODO need actual instance of class here....
      Action.register(payload[method].bind(payload));
      return;
    }

    this.trigger(payload);
  }

  public get payload() {
    return Math.random();
  }

  private trigger(payload: UserStateModel) {
    Action.methods.forEach(m => m(payload));
  }
}
