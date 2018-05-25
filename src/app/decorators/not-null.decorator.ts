export function NotNull(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // save a reference to the original method this way we keep the values currently in the
    // descriptor and don't overwrite what another decorator might have done to the descriptor.
    if(descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
      }
      const originalMethod = descriptor.value;
   
      //editing the descriptor/value parameter
      descriptor.value = function () {
          const args = Array.from(arguments);
          args.forEach(x => {
              if(!x){
                  throw new Error(`Method "${propertyKey}" doesn't take NULL parameters.`)
              }
          })
          // note usage of originalMethod here
          var result = originalMethod.apply(this, args);
          return result;
      };
   
      // return edited descriptor as opposed to overwriting the descriptor
      return descriptor;
}