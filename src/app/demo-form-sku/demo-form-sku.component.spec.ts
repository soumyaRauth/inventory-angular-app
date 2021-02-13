import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSKUComponent } from './demo-form-sku.component';

describe('DemoFormSKUComponent', () => {
  let component: DemoFormSKUComponent;
  let fixture: ComponentFixture<DemoFormSKUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormSKUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSKUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
