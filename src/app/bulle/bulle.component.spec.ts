/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BulleComponent } from './bulle.component';

describe('BulleComponent', () => {
  let component: BulleComponent;
  let fixture: ComponentFixture<BulleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
