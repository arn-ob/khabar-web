import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHistoryViewComponent } from './post-history-view.component';

describe('PostHistoryViewComponent', () => {
  let component: PostHistoryViewComponent;
  let fixture: ComponentFixture<PostHistoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHistoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
