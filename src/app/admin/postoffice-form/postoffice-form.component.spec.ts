import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostofficeFormComponent } from './postoffice-form.component';

describe('PostofficeFormComponent', () => {
  let component: PostofficeFormComponent;
  let fixture: ComponentFixture<PostofficeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostofficeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostofficeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
