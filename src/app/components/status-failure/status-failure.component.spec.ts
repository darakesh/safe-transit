import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusFailureComponent } from './status-failure.component';

describe('StatusFailureComponent', () => {
  let component: StatusFailureComponent;
  let fixture: ComponentFixture<StatusFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusFailureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
