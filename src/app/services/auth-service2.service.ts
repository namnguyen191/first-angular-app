import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService2Service {
  isLoggedIn = false;

  constructor() { }

  logIn() {
    this.isLoggedIn = true;
  }

  authenticate() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 2000);
    });
    return promise;
  }
}
