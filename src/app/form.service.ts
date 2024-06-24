// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FormService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private registrationData: any = {};
  private registrationFile: File | null = null;

  setRegistrationData(data: any): void {
    this.registrationData = data;
  }

  getRegistrationData(): any {
    return this.registrationData;
  }

  setRegistrationFile(file: File): void {
    this.registrationFile = file;
  }

  getRegistrationFile(): File | null {
    return this.registrationFile;
  }



  private storageKey = 'scholarshipFormData';

  saveFormData(form: FormGroup): void {
    const formData = form.value;
    localStorage.setItem(this.storageKey, JSON.stringify(formData));
  }

  loadFormData(): any {
    const formData = localStorage.getItem(this.storageKey);
    return formData ? JSON.parse(formData) : null;
  }

  clearFormData(): void {
    localStorage.removeItem(this.storageKey);
}
}