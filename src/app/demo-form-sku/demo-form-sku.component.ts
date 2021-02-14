import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,AbstractControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSKUComponent implements OnInit {
  myForm: FormGroup;
  sku:FormControl=new FormControl()
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['',Validators.required]
    });


  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
