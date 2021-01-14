import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MyInvoicesComponent } from './my-invoices.component';

describe('MyInvoicesComponent', () => {
  let component: MyInvoicesComponent;
  let fixture: ComponentFixture<MyInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
    ],
      declarations: [ MyInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Test on live server
/*   it('Component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Title should contain "Mina fakturor"', () => {
    const title = 'Mina fakturor';
    const titleElement = document.querySelector('h1');
    expect(titleElement.textContent).toContain(title);
  }); */
});
