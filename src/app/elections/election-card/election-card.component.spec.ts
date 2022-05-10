import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionCardComponent } from './election-card.component';

describe('CustomerCardComponent', () => {
  let component: ElectionCardComponent;
  let fixture: ComponentFixture<ElectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
