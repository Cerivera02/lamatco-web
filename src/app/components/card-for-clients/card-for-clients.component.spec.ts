import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForClientsComponent } from './card-for-clients.component';

describe('CardForClientsComponent', () => {
  let component: CardForClientsComponent;
  let fixture: ComponentFixture<CardForClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardForClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardForClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
