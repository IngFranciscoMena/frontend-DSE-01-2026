import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../../core/services/auth';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  private apiURL = `${environment.apiUrl}/clientes`;

  private getHeaders() {
    const token = this.authService.obtenerToken();

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }
  }

  getClientes(){
    return this.http.get<any[]>(this.apiURL, this.getHeaders());
  }

  saveCliente(cliente: any){
    return this.http.post<any>(this.apiURL, cliente, this.getHeaders());
  }

  getClientePorCodigo(codigoCliente: number) {
    return this.http.get<any>(`${this.apiURL}/${codigoCliente}`, this.getHeaders());
  }

  updateCliente(codigoCliente: number, cliente: any) {
    return this.http.put<any>(`${this.apiURL}/${codigoCliente}`, cliente, this.getHeaders());
  }


}
