import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessnextComponent } from './processnext.component';

describe('ProcessnextComponent', () => {
  let component: ProcessnextComponent;
  let fixture: ComponentFixture<ProcessnextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessnextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
