export function event(type: string, selector: string) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    if (!propertyKey) throw new Error();
    if (!target._events) target._events = {};
    if (!target._events[type]) target._events[type] = [];

    target._events[type].push({
      selector,
      fn: descriptor.value
    });
    return descriptor;
  };
}
