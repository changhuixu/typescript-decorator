export function Component(options: { selector: string }) {
  return (target: any) => {
    target.tagName = options.selector;
  };
}
