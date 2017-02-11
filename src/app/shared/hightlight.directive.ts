import { Directive,HostListener,HostBinding,ElementRef,HostBinding ,Input} from '@angular/core';

@Directive({
  selector: '[appHightlight]',
  directives:[HostListener,HostBinding]
})
export class HightlightDirective {
  private backgroundColor='white';
@HostListener('mouseenter') mouseover(){
  this.backgroundColor=this.appHightlight;
}
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor=this.defaultColor;
  }
  @Input() defaultColor='white';
  @Input() appHightlight ='green';
  constructor() {
    //private elementRef:ElementRef      / /used as Parameter
   // this.elementRef.nativeElement.style.backgroundColor='green';
  }

}
