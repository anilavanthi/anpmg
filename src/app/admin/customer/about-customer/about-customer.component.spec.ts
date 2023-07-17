import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCustomerComponent } from './about-customer.component';

describe('AboutCustomerComponent', () => {
  let component: AboutCustomerComponent;
  let fixture: ComponentFixture<AboutCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
