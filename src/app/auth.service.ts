export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 2000);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log(this.loggedIn);
    
  }

  logOut() {
    this.loggedIn = false;
  }
}
