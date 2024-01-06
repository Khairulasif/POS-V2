import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockreceiveComponent } from './stockreceive.component';

describe('StockreceiveComponent', () => {
  let component: StockreceiveComponent;
  let fixture: ComponentFixture<StockreceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockreceiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockreceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
