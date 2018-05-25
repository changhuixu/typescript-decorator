export function Component(options: { selector: string; template: string }) {
  return (target: any) => {
    target.tagName = options.selector;

    Array.from(document.getElementsByTagName(options.selector)).forEach(x => {
      x.innerHTML = options.template;
    });
  };
}
