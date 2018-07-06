export function time(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  if (descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
  }
  const originalMethod = descriptor.value;
  let i = 0;
  
  descriptor.value = function(...args: any[]) {
    const id = `${propertyKey}_${i++}`;
    console.time(id);
    const result = originalMethod.apply(this, args);
    console.timeEnd(id);
    return result;
  };
  return descriptor;
}
