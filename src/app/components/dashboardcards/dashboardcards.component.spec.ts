import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcardsComponent } from './dashboardcards.component';

describe('DashboardcardsComponent', () => {
  let component: DashboardcardsComponent;
  let fixture: ComponentFixture<DashboardcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
