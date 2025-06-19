import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettereComponent } from './lettere.component';

describe('LettereComponent', () => {
  let component: LettereComponent;
  let fixture: ComponentFixture<LettereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LettereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
