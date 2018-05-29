export function readonly(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  if (descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
  }
  descriptor.writable = false;
  return descriptor;
}
