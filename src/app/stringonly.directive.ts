import { Directive ,ElementRef,HostListener} from '@angular/core';
import  { NG_VALIDATORS ,AbstractControl,ValidationErrors, Validator} from '@angular/forms';
@Directive({
  selector: '[appStringonly]',
  providers:[
  {
    provide:NG_VALIDATORS,
    useExisting:StringonlyDirective,
    multi:true
  }
  ]
})
export class StringonlyDirective implements Validator{

  constructor(private el:ElementRef) { }

  @HostListener('input',['$event'])

  onInput(event:Event): void {
    let inputValue = this.el.nativeElement.value
    this.el.nativeElement.value = inputValue.replace(/[^A-Za-z\s]/g, '')
  }

 validate(control: AbstractControl): ValidationErrors | null {
   const value=control.value
   if(!value) return null;

   const isvalid=/^[A-za-z\s]+$/.test(value)
   return isvalid ? null : { stringOnly:true };
 }
}
