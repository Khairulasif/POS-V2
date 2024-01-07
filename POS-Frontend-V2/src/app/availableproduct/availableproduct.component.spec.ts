import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableproductComponent } from './availableproduct.component';

describe('AvailableproductComponent', () => {
  let component: AvailableproductComponent;
  let fixture: ComponentFixture<AvailableproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
