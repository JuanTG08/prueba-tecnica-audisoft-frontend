import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNotasComponent } from './listado-notas.component';

describe('ListadoNotasComponent', () => {
  let component: ListadoNotasComponent;
  let fixture: ComponentFixture<ListadoNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoNotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
