import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyStickerComponent } from './daily-sticker.component';

describe('DailyStickerComponent', () => {
  let component: DailyStickerComponent;
  let fixture: ComponentFixture<DailyStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyStickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
