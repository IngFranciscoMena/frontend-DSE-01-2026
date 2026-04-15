import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  clientes = [
    { codigo: 1, nombre: 'Juan Pérez', dui: '00000000-0', telefono: '1234-5678', estado: 'Activo' },
    { codigo: 2, nombre: 'María López', dui: '11111111-1', telefono: '2345-6789', estado: 'Inactivo' },
    { codigo: 3, nombre: 'Carlos Gómez', dui: '22222222-2', telefono: '3456-7890', estado: 'Activo' },
  ];

  getClientes(){
    return this.clientes;
  }

  saveCliente(cliente: any){
    // lógica 
    const nuevoCodigo = this.clientes.length > 0 ? Math.max(...this.clientes.map(c => c.codigo)) + 1 : 1  // Spread Operator

    cliente.codigo = nuevoCodigo;

    this.clientes.push(cliente);
  }


}
