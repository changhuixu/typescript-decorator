const serialized = new WeakMap();

export function serializable(name?: string) {
  return function(target: any) {
    target.prototype.toJSON = function() {
      const map = serialized.get(target.prototype);
      const props = Object.keys(map);
      const obj = props.reduce((pre: any, key: string) => {
        pre[map[key]] = this[key];
        return pre;
      }, {});
      if (name) {
        const result: any = {};
        result[name] = obj;
        return result;
      }
      return obj;
    };
  };
}

export function serialize(name?: string) {
  return function(target: any, propertyKey: string) {
    let map = serialized.get(target);
    if (!map) {
      map = {};
      serialized.set(target, map);
    }

    map[propertyKey] = name || propertyKey;
  };
}
