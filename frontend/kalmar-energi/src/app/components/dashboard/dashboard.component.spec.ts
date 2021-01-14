import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
    ],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should be created', () => {
    expect(component).toBeTruthy();
  });
  
  it('Sidenav should be created', () => {
    const sideNavElement = document.querySelector('mat-sidenav');
    expect(sideNavElement).toBeTruthy();
  });

  it('Toolbar should be created', () => {
    const toolbarElement = document.querySelector('mat-toolbar');
    expect(toolbarElement).toBeTruthy();
  });

  it('Toolbar row should contain text "Meny"', () => {
    const toolbarRowElement = document.querySelector('mat-toolbar-row');
    expect(toolbarRowElement.textContent).toContain('Meny');
  });
});
