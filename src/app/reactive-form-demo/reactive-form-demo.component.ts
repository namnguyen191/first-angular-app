import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css'],
})
export class ReactiveFormDemoComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        // WE HAVE TO BIND THE THIS KEYWORD SINCE ITS NOT RECOMMEND TO USE ARROW FUNCTION IN ANGULAR
        userName: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    this.signupForm.setValue({
      userData: {
        userName: 'Nam',
        email: 'hoangnamnguyen191@gmail.com',
      },
      gender: 'male',
      hobbies: [],
    });
    this.signupForm.patchValue({
      userData: {
        userName: 'Nam Nguyen',
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({
      gender: 'male',
    });
  }

  // ALLOW USER TO ADD NEW FORMCONTROL
  onAddHobby() {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(formControl);
  }

  // CUSTOM FORM VALIDATOR
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    // IF THE INPUT IS VALID WE HAVE TO RETURN NOTHING OR NULL, NOT FALSE
    return null;
  }

  // ASYNC VALIDATOR
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        }
        resolve(null);
      }, 2000);
    });
    return promise;
  }
}
