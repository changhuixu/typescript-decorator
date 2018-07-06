# TypeScript Decorators

An introduction to decorator in Typescript; A resemblance to Angular component decorator.

## Prologue

It's known that Angular internally uses "Decorators" intensively. Moreover, [NgRX](https://www.npmjs.com/package/@ngrx/store) and [NGXS](https://ngxs.gitbook.io/ngxs/), a more elegant library, both provide a set of handy and reusable decorators to help application composition.
The concept of “[Decorators](http://www.typescriptlang.org/docs/handbook/decorators.html)” is not restricted in the world of TypeScript or Angular. “Decorators” is applicable to all JS frameworks, such as in VueJS ([vue-class-component](https://www.npmjs.com/package/vue-class-component), [vue-property-decorator](https://www.npmjs.com/package/vue-property-decorator), …) and React/Redux ([mobx-react](https://www.npmjs.com/package/mobx-react), [react-redux](https://www.npmjs.com/package/react-redux), [redux-form](https://www.npmjs.com/package/redux-form), [react-dnd](https://www.npmjs.com/package/react-dnd) …).

“[Decorators](https://github.com/tc39/proposal-decorators)” is currently in ECMAScript Proposals Stage-2. And TC39 will discuss the possibility of promoting “Decorators” to Stage-3 in [July 2018](https://github.com/tc39/agendas/blob/master/2018/07.md). The specs for “Decorators” might remain the same or might change. Anyhow, JavaScript community has already built up many “Decorator” libraries with significant amounts of downloads, such as [core-decorators](https://www.npmjs.com/package/core-decorators), [lodash-decorators](https://www.npmjs.com/package/lodash-decorators), and [babel-plugin-syntax-decorators](https://www.npmjs.com/package/babel-plugin-syntax-decorators).

Back to our FBIS environment, I haven’t found any needs of writing a customized “Decorator” so far. However, having some basic knowledge of “Decorators” would help us reading/understanding libraries/frameworks using “Decorators”.

## Decorator Examples

- readonly
- log
- time
- notnull
- deprecated
- serializable
- serialize
- memoize
- component
- event
- component-with-interpolation

## Decorators Concepts

A Decorator is a special kind of declaration that can be attached to a __*class declaration*__, __*method*__, __*accessor*__, __*property*__, or __*parameter*__.

### Evaluation Order

1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
3. Parameter Decorators are applied for the constructor.
4. Class Decorators are applied for the class.

### Decorator Composition

```typescript
@f @g x
// or
@f
@g
x
```

In this model, when composing functions f and g, the resulting composite (f ∘ g)(x) is equivalent to f(g(x)).

### Class Decorators

```typescript
function ClassDecorator(
  target: any // The class the decorator is declared on
) {}

@ClassDecorator
class ClassDecoratorExample {}
```

### Method Decorators

```typescript
function MethodDecorator(
  target: any,  //Either the constructor function of the class for a static 
                //member, or the prototype of the class for an instance member.
  propertyKey: string,  // The name of the member.
  descriptor: PropertyDescriptor    //The Property Descriptor for the member.
) {}

class ClassExample {
    @MethodDecorator
    method(){}
}
```

### Accessor Decorators

Function signature is the same as Method Decorators

### Property Decorators

```typescript
function PropertyDecorator(
  target: any,  //Either the constructor function of the class for a static
                //member, or the prototype of the class for an instance member.
  propertyKey: string  // The name of the member.
) {}

class ClassExample {
    @PropertyDecorator
    prop: string;
}
```

### Parameter Decorators

```typescript
function ParameterDecorator(
  target: any,  //Either the constructor function of the class for a static
                //member, or the prototype of the class for an instance member.
  propertyKey: string  // The name of the member.
  index: number //The ordinal index of the parameter in the function’s parameter list.
) {}

class ClassExample {
    method(@Parameterecorator param1: string){}
}
```
