import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranHistoryComponent } from './tran-history.component';

describe('TranHistoryComponent', () => {
  let component: TranHistoryComponent;
  let fixture: ComponentFixture<TranHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
