import { UserStateModel } from './user-state-model';
import { Action } from './action';

export class Store {
  private static state = {
    data: <UserStateModel>undefined
  };

  public static get data() {
    return this.state.data;
  }

  //@Action
  public static setData(data: UserStateModel) {
    console.log(this);
    this.state.data = data;
  }
}
