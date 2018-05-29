export function NotNull(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  if (descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
  }
  const originalMethod = descriptor.value;

  descriptor.value = function() {
    const args = Array.from(arguments);
    args.forEach(x => {
      if (!x) {
        throw new Error(
          `Method "${propertyKey}" doesn't take NULL parameters.`
        );
      }
    });
    return originalMethod.apply(this, args);
  };

  return descriptor;
}
