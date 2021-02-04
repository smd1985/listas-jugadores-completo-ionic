import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarJugadorPage } from './listar-jugador.page';

describe('ListarJugadorPage', () => {
  let component: ListarJugadorPage;
  let fixture: ComponentFixture<ListarJugadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarJugadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarJugadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
