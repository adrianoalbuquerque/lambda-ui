import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LambdaUiComponent } from './lambda-ui.component';

describe('LambdaUiComponent', () => {
  let component: LambdaUiComponent;
  let fixture: ComponentFixture<LambdaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LambdaUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LambdaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
