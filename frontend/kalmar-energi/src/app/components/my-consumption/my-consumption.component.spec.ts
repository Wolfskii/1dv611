import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MyConsumptionComponent } from './my-consumption.component';

describe('MyConsumptionComponent', () => {
  let component: MyConsumptionComponent;
  let fixture: ComponentFixture<MyConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ MyConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should be created', () => {
    expect(component).toBeTruthy();
  });

  // TODO: Implement tests when my-consumption component gets content
});
