import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaisseauxDetailComponent } from './vaisseaux-detail.component';

describe('VaisseauxDetailComponent', () => {
  let component: VaisseauxDetailComponent;
  let fixture: ComponentFixture<VaisseauxDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaisseauxDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaisseauxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
