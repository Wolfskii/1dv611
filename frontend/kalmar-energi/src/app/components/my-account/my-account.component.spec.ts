import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MyAccountComponent } from './my-account.component';

describe('MyAccountComponent', () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ MyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  // Not yet tested on live-server
/*   it('Component should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Title should contain "Min profil"', () => {
    const title = 'Min profil'
    const titleElement = document.querySelector('h1');
    expect(titleElement.textContent).toContain(title);
  });

    it('Subtitle should contain "Faktureringsuppgifter"', () => {
    const title = 'Faktureringsuppgifter'
    const titleElement = document.querySelector('h2');
    expect(titleElement.textContent).toContain(title);
  }); */
});
