interface Cache {
  [key: string]: any;
}

export function memoize(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  if (descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
  }
  const originalMethod = descriptor.value;
  const cache: Cache = {};

  descriptor.value = function (...args: any[]) {
    if (cache[args.toString()]) return cache[args.toString()];
    return (cache[args.toString()] = originalMethod.apply(this, args));
  };
  return descriptor;
}
