import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArmapPage } from './armap.page';

describe('ArmapPage', () => {
  let component: ArmapPage;
  let fixture: ComponentFixture<ArmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
