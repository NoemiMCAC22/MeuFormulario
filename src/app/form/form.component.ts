import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name: string = '';
  email: string = '';
  nif: string = '';
  birthdate: string = '';
  country: string = '';
  city: string = '';
  address: string = '';
  zipcode: string = '';
  phone: string = '';
  gender: string = '';

  cities: string[] = [];
  zipcodePattern: string = '';

  isAgeValid: boolean = false;
  isNifValid: boolean = false;
  isZipcodeValid: boolean = false;
  isPhoneValid: boolean = false;

  constructor() {
    this.cities = [];
    this.zipcodePattern = '';

    this.isAgeValid = false;
    this.isNifValid = false;
    this.isZipcodeValid = false;
    this.isPhoneValid = false;
  }

  onSubmit() {
    console.log('Form submitted!');
  }

  validateAge() {
    const birthdate = new Date(this.birthdate);
    const ageDifferenceMs = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageDifferenceMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    this.isAgeValid = age >= 18;
  }

  validateNif() {
    const validNifs = [
      '123456789',
      '234567890',
      '345678901',
      '456789012',
      '567890123',
      '678901234',
      '789012345',
      '890123456',
      '901234567'
    ];

    this.isNifValid = validNifs.includes(this.nif);
  }

  updateCities() {
    switch (this.country) {
      case 'Portugal':
        this.cities = ['Lisboa', 'Porto'];
        this.zipcodePattern = '\\d{4}-\\d{3}';
        break;

      case 'Brasil':
        this.cities = ['São Paulo', 'Rio de Janeiro'];
        this.zipcodePattern = '\\d{5}-\\d{3}';
        break;

      case 'Espanha':
        this.cities = ['Madrid', 'Barcelona'];
        this.zipcodePattern = '\\d{5}';
        break;

      case 'França':
        this.cities = ['Paris', 'Lyon'];
        this.zipcodePattern = '\\d{5}';
        break;

      case 'Itália':
        this.cities = ['Roma', 'Milão'];
        this.zipcodePattern = '\\d{5}';
        break;

      default:
        this.cities = [];
        this.zipcodePattern = '';
        break;
    }
  }

  validatePhone() {
    const phoneRegex = /[239][0-9]{8}|[2][1-9][0-9]{7}|[9][1236][0-9]{7}/g;

    this.isPhoneValid = phoneRegex.test(this.phone);
  }
}