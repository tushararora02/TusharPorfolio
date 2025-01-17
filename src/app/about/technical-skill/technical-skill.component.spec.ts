import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSkillComponent } from './technical-skill.component';

describe('TechnicalSkillComponent', () => {
  let component: TechnicalSkillComponent;
  let fixture: ComponentFixture<TechnicalSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalSkillComponent]
    });
    fixture = TestBed.createComponent(TechnicalSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
