import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
    ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('Component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Title should contain "Mina sidor"', () => {
    const title = 'Mina Sidor';
    const titleElement = document.querySelector('mat-card-title');
    expect(titleElement.textContent).toContain(title);
  });

    it('Subtitle should contain "Logga in"', () => {
    const subTitle = 'Logga in';
    const subTitleElement = document.querySelector('mat-card-subtitle');
    expect(subTitleElement.textContent).toContain(subTitle);
  });
});
