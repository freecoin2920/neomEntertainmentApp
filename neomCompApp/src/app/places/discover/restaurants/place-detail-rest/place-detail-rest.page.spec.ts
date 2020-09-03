import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceDetailRestPage } from './place-detail-rest.page';

describe('PlaceDetailRestPage', () => {
  let component: PlaceDetailRestPage;
  let fixture: ComponentFixture<PlaceDetailRestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDetailRestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceDetailRestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
