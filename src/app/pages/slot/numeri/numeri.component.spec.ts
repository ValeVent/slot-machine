import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeriComponent } from './numeri.component';

describe('NumeriComponent', () => {
  let component: NumeriComponent;
  let fixture: ComponentFixture<NumeriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumeriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
