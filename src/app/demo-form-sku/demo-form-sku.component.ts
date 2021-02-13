import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup
  } from '@angular/forms';
@Component({
  selector: 'demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSKUComponent implements OnInit {
  myFormGroup:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.myFormGroup=this.fb.group({
      'sku':['123456']
    })
  }

  onSubmit=(formVal:any)=>console.log(formVal);
  

  ngOnInit(): void {
  }

}
