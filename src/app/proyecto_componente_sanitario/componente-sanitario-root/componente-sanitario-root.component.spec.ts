import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSanitarioRootComponent } from './componente-sanitario-root.component';

describe('ComponenteSanitarioRootComponent', () => {
  let component: ComponenteSanitarioRootComponent;
  let fixture: ComponentFixture<ComponenteSanitarioRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteSanitarioRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteSanitarioRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
