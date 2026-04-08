import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes-list',
  imports: [CommonModule],
  templateUrl: './clientes-list.html',
  styleUrl: './clientes-list.css',
})

export class ClientesList {
  clientes = [
    { codigo: 'C001', nombre: 'Juan Pérez', dui: '00000000-0', telefono: '1234-5678', estado: 'Activo' },
    { codigo: 'C002', nombre: 'María López', dui: '11111111-1', telefono: '2345-6789', estado: 'Inactivo' },
    { codigo: 'C003', nombre: 'Carlos Gómez', dui: '22222222-2', telefono: '3456-7890', estado: 'Activo' },
  ];
  
}
