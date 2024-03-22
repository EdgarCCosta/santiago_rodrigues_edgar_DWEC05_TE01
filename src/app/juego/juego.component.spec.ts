import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAdivinacionComponent } from './juego.component';

describe('JuegoComponent', () => {
  let component: JuegoAdivinacionComponent;
  let fixture: ComponentFixture<JuegoAdivinacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegoAdivinacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegoAdivinacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
