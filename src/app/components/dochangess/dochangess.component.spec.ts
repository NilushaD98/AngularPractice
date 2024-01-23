import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DochangessComponent } from './dochangess.component';

describe('DochangessComponent', () => {
  let component: DochangessComponent;
  let fixture: ComponentFixture<DochangessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DochangessComponent]
    });
    fixture = TestBed.createComponent(DochangessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
