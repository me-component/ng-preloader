import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPreloaderComponent } from './ng-preloader.component';

describe('NgPreloaderComponent', () => {
  let component: NgPreloaderComponent;
  let fixture: ComponentFixture<NgPreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
