import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,AbstractControl, FormGroup, Validators } from '@angular/forms';



// function skuValidator(control: FormControl): { [s: string]: boolean } {
//   if (!control.value.match(/^123/)) {
//     return {invalidSku: true};
//   }
// }


@Component({
  selector: 'demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSKUComponent implements OnInit {
myForm:FormGroup;
sku:FormControl=new FormControl();

constructor(private fb:FormBuilder)
{
  this.myForm=fb.group({
    'sku':['', Validators.compose([Validators.required,skuContainsNum,this.skuStartsWithNum,fuckValidator,noThanos]) ]
  })

 this.myForm.valueChanges.subscribe((form:FormGroup)=>{
   console.log(form['sku']);
   
 })
  
}


skuStartsWithNum(control: AbstractControl): {[key:string]:any} | null{

  if(control.value.match(/^\d/)){
    return {'startsWithNum':true}
  }else{
    return null;
  }
  
}



  

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}


// function skuStartsWithNum(control: AbstractControl): {[key:string]:any} | null{

//   if(control.value.match(/^\d/)){
//     return {'startsWithNum':true}
//   }else{
//     return null;
//   }
  
// }


/**
  * Contains Number Validator
  */
 function skuContainsNum(control:AbstractControl):{[key:string]:any}|null{
   console.log("SKU Contains num");
   console.log(/\d/.test(control.value));
   
  if(/\d/.test(control.value)){
    return null;
  }else{
    return {'skuContainsNumber':true}
  }
}


/**
SKU Contains the word Fuck
 */

function fuckValidator(control:AbstractControl):{[key:string]:any}|null{
  if(control.value.toLowerCase().includes('fuck')){
    return {'fuckCheck':true}
  }else{
    return null;
  }
}


function noThanos(control:AbstractControl):{[key:string]:any} |null{
  if(control.value.toLowerCase().includes('thanos')){
    return {'noThanos':true}
  }else{
    return null;
  }
}