import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceLivenessComponent } from './face-liveness.component';

describe('FaceLivenessComponent', () => {
  let component: FaceLivenessComponent;
  let fixture: ComponentFixture<FaceLivenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceLivenessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceLivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
