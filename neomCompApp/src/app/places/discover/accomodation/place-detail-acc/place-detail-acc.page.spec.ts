import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceDetailAccPage } from './place-detail-acc.page';

describe('PlaceDetailAccPage', () => {
  let component: PlaceDetailAccPage;
  let fixture: ComponentFixture<PlaceDetailAccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDetailAccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceDetailAccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
