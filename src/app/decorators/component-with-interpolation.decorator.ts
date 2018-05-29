import * as _ from 'lodash';

export function ComponentWithInterpolation(options: {
  selector: string;
  template: string;
}) {
  return function(target: any) {
    target.selector = options.selector;
    target.template = _.template(options.template);
  };
}
