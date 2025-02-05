import { AbstractControl, ValidationErrors } from "@angular/forms";
export class passwordvalidator{

// static passwordStrength():ValidatorFn{

//   return (control:AbstractControl): ValidationErrors | null=>{
//  const value = control.value;
//  if(!value){
//   return null
//  }
//  const hasNumber = /[0-9]/.test(value);
//  const hasUpper = /[A-Z]/.test(value);
//  const hasLower = /[a-z]/.test(value);
//  const isValidLength = value.length >=8
//  const passwordvalid = hasNumber && hasLower && hasUpper && isValidLength;
//  return passwordvalid ? null : {passwordStrength:true}
//   }
// }

// to get password and compare with retype
// static matchPassword(): ValidatorFn {
//   return (control:AbstractControl) : ValidationErrors | null => {
//     const retypepasword = control.value;
//     const password = control.parent?.get('password')!.value;
//     if(retypepasword === password)  { return null }
//     else {  return {passwordmismatch :true}}
//   }
// }


//getpassword and retype and compare
static matchPasswordForm(form :AbstractControl):ValidationErrors |null {
  const password = form.get('password')?.value
  const retypepassword = form.get('retypepassword')?.value
  if(password === retypepassword){
    return null
  }
  else{
    return {passwordmismatch :true}
  }
}


}
