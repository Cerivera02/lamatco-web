import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithPhotoComponent } from './card-with-photo.component';

describe('CardWithPhotoComponent', () => {
  let component: CardWithPhotoComponent;
  let fixture: ComponentFixture<CardWithPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
