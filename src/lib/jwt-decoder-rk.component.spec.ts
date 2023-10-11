import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtDecoderRkComponent } from './jwt-decoder-rk.component';

describe('JwtDecoderRkComponent', () => {
  let component: JwtDecoderRkComponent;
  let fixture: ComponentFixture<JwtDecoderRkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JwtDecoderRkComponent]
    });
    fixture = TestBed.createComponent(JwtDecoderRkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
