export function log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  if (descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
  }
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    const a = args.map(s => JSON.stringify(s)).join();
    const result = originalMethod.apply(this, args);
    const r = JSON.stringify(result);
    console.log(`Method Call: ${propertyKey}(${a}) => ${r}`);
    return result;
  };

  return descriptor;
}
