import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// impotar nuestro archivo environment
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // importar el modulo httpClient
  private http = inject(HttpClient);

  login(data: any) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, data);
  }

  guardarToken(token: string): void {
    sessionStorage.setItem('bankadmin_token', token);
  }

  obtenerToken(): string | null {
    return sessionStorage.getItem('bankadmin_token');
  }

  estaAutenticado(): boolean {
    return !!this.obtenerToken();
  }

  logout(): void {
    sessionStorage.removeItem('bankadmin_token');
  }
}
