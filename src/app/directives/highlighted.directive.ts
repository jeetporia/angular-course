import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]',
})
export class HighlightedDirective {
  
  @Input('highlighted')
  isHighlighted = false;

  constructor() {
    console.log(' Directive created ')
  }
  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  // @HostBinding('class.highlighted')
  // get cssClass() {
  //   return true;
  // }

  // @HostBinding('style.border')
  // get cssClass() {
  //   return '1px solid black';
  // }

  @HostBinding('class.highlighted')
  get cssClass() {
    return this.isHighlighted
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }


}

// if we want to use different name for the input we can in that case we have to use highlighted [color] = 'red' in the consumer side
// for hostBinding we can use any valid HTML attribute and property, if we use something new browser will crash and won't work
