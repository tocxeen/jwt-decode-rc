import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtDecoderRk } from './jwt-decoder-rk.component';

describe('JwtDecoderRk', () => {
  let component: JwtDecoderRk;
  let fixture: ComponentFixture<JwtDecoderRk>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JwtDecoderRk]
    });
    fixture = TestBed.createComponent(JwtDecoderRk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
