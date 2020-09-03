import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccomodationPage } from './accomodation.page';

describe('AccomodationPage', () => {
  let component: AccomodationPage;
  let fixture: ComponentFixture<AccomodationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccomodationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
