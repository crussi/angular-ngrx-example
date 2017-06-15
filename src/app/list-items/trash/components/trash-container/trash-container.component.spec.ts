import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashContainerComponent } from './trash-container.component';

describe('TrashContainerComponent', () => {
  let component: TrashContainerComponent;
  let fixture: ComponentFixture<TrashContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
