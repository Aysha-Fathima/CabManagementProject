import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcabComponent } from './bookcab.component';

describe('BookcabComponent', () => {
  let component: BookcabComponent;
  let fixture: ComponentFixture<BookcabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookcabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookcabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
