export function deprecated(message: string = '') {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if (descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      console.warn(`Method ${propertyKey} is deprecated. ${message}`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
