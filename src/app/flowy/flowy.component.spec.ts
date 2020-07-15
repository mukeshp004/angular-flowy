import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowyComponent } from './flowy.component';

describe('FlowyComponent', () => {
  let component: FlowyComponent;
  let fixture: ComponentFixture<FlowyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
