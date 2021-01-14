import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
/**
 * Service for the website's authorization methods.
 */
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /**
   * Makes a POST request to /login on the backend.
   *
   * @param customerNumber A customer number received from login form.
   */
  login(customerNumber: string): Observable<boolean> {
    return this.http.post<any>('/dev/login', { customerCode: customerNumber })
      .pipe(
        tap(res => {
          const token = {
            idToken: res.token,
            expiresIn: 900
          };
          this.setSession(token);
        }),
        mapTo(true),
        catchError(error => {
          return of(false);
        }));
  }

  /**
   * Stores a JWT token in the client's local storage.
   *
   * @param authResult authResult
   */
  private setSession(authResult: any): void {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + authResult.expiresIn * 1000);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  /**
   * Clears the local storage.
   *
   */
  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  /**
   * Checks if there is a token in local storage. If tokens exists but is expired,
   * token is removed.
   *
   */
  public isLoggedIn(): boolean {
    const now = Date.now();
    const expiration = parseInt(localStorage.getItem('expires_at'));
    const token = localStorage.getItem('id_token');
    if (!token || !expiration || now >= expiration) {
      this.logout();
      return false;
    }
    return true;
  }
}
