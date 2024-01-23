import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesssComponent } from './pipesss.component';

describe('PipesssComponent', () => {
  let component: PipesssComponent;
  let fixture: ComponentFixture<PipesssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesssComponent]
    });
    fixture = TestBed.createComponent(PipesssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
