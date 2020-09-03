import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceDetailActPage } from './place-detail-act.page';

describe('PlaceDetailActPage', () => {
  let component: PlaceDetailActPage;
  let fixture: ComponentFixture<PlaceDetailActPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDetailActPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceDetailActPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
