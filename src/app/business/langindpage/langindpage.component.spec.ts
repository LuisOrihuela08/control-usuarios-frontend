import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangindpageComponent } from './langindpage.component';

describe('LangindpageComponent', () => {
  let component: LangindpageComponent;
  let fixture: ComponentFixture<LangindpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangindpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangindpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
