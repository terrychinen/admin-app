// Angular framework imports
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

// Rxjs
import { Observable, tap } from 'rxjs';

// Intefaces
import { SignInResponse } from '@auth/interfaces';

// Environments
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _http = inject(HttpClient);
  private _apiUrl = `${environment.apiUrl}/auth`;

  signIn(email: string, password: string): Observable<SignInResponse> {
    const url = `${this._apiUrl}/login`;
    return this._http.post<SignInResponse>(url, { email, password })
      .pipe(
        tap((res: SignInResponse) => {
          if (!res.access_token) return;
          localStorage.setItem('access_token', res.access_token);
        })
      );
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}
