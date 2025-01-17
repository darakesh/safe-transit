import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSuccessComponent } from './status-success.component';

describe('StatusSuccessComponent', () => {
  let component: StatusSuccessComponent;
  let fixture: ComponentFixture<StatusSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
