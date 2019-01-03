import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSeaComponent } from './word-sea.component';

describe('WordSeaComponent', () => {
  let component: WordSeaComponent;
  let fixture: ComponentFixture<WordSeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
