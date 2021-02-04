import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddJugadorPage } from './add-jugador.page';

describe('AddJugadorPage', () => {
  let component: AddJugadorPage;
  let fixture: ComponentFixture<AddJugadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJugadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddJugadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
