import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivebookingComponent } from './activebooking.component';

describe('ActivebookingComponent', () => {
  let component: ActivebookingComponent;
  let fixture: ComponentFixture<ActivebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivebookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
