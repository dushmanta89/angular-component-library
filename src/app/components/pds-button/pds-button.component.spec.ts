import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdsButtonComponent } from './pds-button.component';

describe('PdsButtonComponent', () => {
  let component: PdsButtonComponent;
  let fixture: ComponentFixture<PdsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
