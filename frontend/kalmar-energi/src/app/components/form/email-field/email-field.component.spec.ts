import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFieldComponent } from './email-field.component';

describe('EmailFieldComponent', () => {
  let component: EmailFieldComponent;
  let fixture: ComponentFixture<EmailFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should be created', () => {
    expect(component).toBeTruthy();
  });
  
  it('Input element should be of type "email"', () => {
    const inputElement = document.querySelector('input');
    expect(inputElement.type).toEqual('email');
  });
});
