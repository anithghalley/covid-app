import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicRegistrationComponent } from './clinicregistration.component';

describe('ClinicRegistrationComponent', () => {
  let component: ClinicRegistrationComponent;
  let fixture: ComponentFixture<ClinicRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
