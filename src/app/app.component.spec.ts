import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: any;
  let compiled: any;

  const FIRST_LETTER_LABEL_TEXT = 'First Letter of First Name';
  const DAY_OF_BIRTH_LABEL_TEXT = 'Day of Birth';
  const SURNAME_LETTER_LABEL_TEXT = 'First Letter of Surname';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
        FormsModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Special Move'`, () => {
    expect(app.title).toEqual('Special Move');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain(`Welcome to ${app.title}!`);
  });

  it('should have property firstLetter', () => {
    expect(app.firstLetter).toBeTruthy();
  });

  it('should have property SurnameLetter', () => {
    expect(app.surnameLetter).toBeTruthy();
  });

  it('should have property dayOfBirth', () => {
    expect(app.dayOfBirth).toBeTruthy();
  });

  // firstLetter
  describe('firstLetter controls', () => {

    it(`should have mat-label with id 'lblFirstLetter'`, () => {
      expect(compiled.querySelector('#lblFirstLetter').id).toEqual('lblFirstLetter');
    });

    it(`should have mat-label with id 'lblFirstLetter' and InnerText = ${FIRST_LETTER_LABEL_TEXT}`, () => {
      expect(compiled.querySelector('#lblFirstLetter').innerText).toEqual(FIRST_LETTER_LABEL_TEXT);
    });

    it(`should have mat-form-field with id 'selectFirstLetter'`, () => {
      expect(compiled.querySelector('#selectFirstLetter')).toBeTruthy();
    });
  });
  // dayOfBirth
  describe('dayOfBirthControls', () => {
    it(`should have mat-label with id 'lblDayOfBirth'`, () => {
      expect(compiled.querySelector('#lblDayOfBirth').id).toEqual('lblDayOfBirth');
    });

    it(`should have mat-label with id 'lblDayOfBirth' and InnerText = ${DAY_OF_BIRTH_LABEL_TEXT}`, () => {
      expect(compiled.querySelector('#lblDayOfBirth').innerText).toEqual(DAY_OF_BIRTH_LABEL_TEXT);
    });

    it(`should have mat-form-field with id 'selectDayOfBirth'`, () => {
      expect(compiled.querySelector('#selectDayOfBirth')).toBeTruthy();
    });
  });

  // SurnameLetter
  describe('surnameLetter controls', () => {
    it(`should have mat-label with id 'lblSurnameLetter'`, () => {
      expect(compiled.querySelector('#lblSurnameLetter').id).toEqual('lblSurnameLetter');
    });

    it(`should have mat-label with id 'lblSurnameLetter' and InnerText = ${SURNAME_LETTER_LABEL_TEXT}`, () => {
      expect(compiled.querySelector('#lblSurnameLetter').innerText).toEqual(SURNAME_LETTER_LABEL_TEXT);
    });

    it(`should have mat-form-field with id 'selectSurnameLetter'`, () => {
      expect(compiled.querySelector('#selectSurnameLetter')).toBeTruthy();
    });
  });

  describe('GetMove', () => {
    it('should have method GetMove', () => {
      expect(app.GetMove()).toBe('');
    });

  });

});
