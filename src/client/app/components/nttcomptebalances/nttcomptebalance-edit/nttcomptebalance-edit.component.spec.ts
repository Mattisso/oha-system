import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NttcomptebalancesEditComponent } from './nttcomptebalance-edit.component';

describe('NttcomptebalancesEditComponent', () => {
  let component: NttcomptebalancesEditComponent;
  let fixture: ComponentFixture<NttcomptebalancesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NttcomptebalancesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NttcomptebalancesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
