import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
let Auth0Lock: any = require('auth0-lock').default;

@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock('l7gMUNWLlesZzUOr6ZxSKFtc5JYU8uW6', 'sponsorgit.eu.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}
