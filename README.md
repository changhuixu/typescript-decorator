# TypeScript Decorator

An introduction to decorator in Typescript; A resemblance to Angular component decorator.

## Prologue

It's known that Angular internally uses "Decorators" intensively. Moreover, [NgRX](https://www.npmjs.com/package/@ngrx/store) and [NGXS](https://ngxs.gitbook.io/ngxs/), a more elegant library, both provide a set of handy and reusable decorators to help application composition.
The concept of “[Decorators](http://www.typescriptlang.org/docs/handbook/decorators.html)” is not restricted in the world of TypeScript or Angular. “Decorators”  is applicable to all JS frameworks, such as in VueJS ([vue-class-component](https://www.npmjs.com/package/vue-class-component), [vue-property-decorator](https://www.npmjs.com/package/vue-property-decorator), …) and React/Redux ([mobx-react](https://www.npmjs.com/package/mobx-react), [react-redux](https://www.npmjs.com/package/react-redux), [redux-form](https://www.npmjs.com/package/redux-form), [react-dnd](https://www.npmjs.com/package/react-dnd) …).

“[Decorators](https://github.com/tc39/proposal-decorators)” is currently in ECMAScript Proposals Stage-2. And TC39 will discuss the possibility of promoting “Decorators” to Stage-3 in [July 2018](https://github.com/tc39/agendas/blob/master/2018/07.md). The specs for “Decorators” might remain the same or might change. Anyhow, JavaScript community has already built up many “Decorator” libraries with significant amounts of downloads, such as [core-decorators](https://www.npmjs.com/package/core-decorators), [lodash-decorators](https://www.npmjs.com/package/lodash-decorators), and [babel-plugin-syntax-decorators](https://www.npmjs.com/package/babel-plugin-syntax-decorators).

Back to our FBIS environment, I haven’t found any needs of writing a customized “Decorator” so far. However, having some basic knowledge of “Decorators” would help us reading/understanding libraries/frameworks using “Decorators”.

## Decorator Examples

* readonly
* log
* time
* notnull
* deprecated
* memoize
* component
* event
* component-with-interpolation
