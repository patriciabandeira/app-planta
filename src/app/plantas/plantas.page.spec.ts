import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasPage } from './plantas.page';

describe('PlantasPage', () => {
  let component: PlantasPage;
  let fixture: ComponentFixture<PlantasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
