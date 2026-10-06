import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
})
export class HighlightedDirective {
  
  @Input('highlighted')
  isHighlighted = false;
  
  @Output()
  toggleHighlight = new EventEmitter<boolean>();

  constructor() {
    console.log(' Directive created ')
  }

  @HostBinding('class.highlighted')
  get cssClass() {
    return this.isHighlighted
  }


  @HostListener('mouseover', ['$event'])
  mouseover(event) {
    console.log(event)
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted)
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.isHighlighted = false;
     this.toggleHighlight.emit(this.isHighlighted)
  }

}
