import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTourViewComponent } from './single-tour-view.component';

describe('SingleTourViewComponent', () => {
  let component: SingleTourViewComponent;
  let fixture: ComponentFixture<SingleTourViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTourViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTourViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
