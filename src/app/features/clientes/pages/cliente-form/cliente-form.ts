import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientesService } from '../../services/clientes';

@Component({
  selector: 'app-cliente-form',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './cliente-form.html',
  styleUrl: './cliente-form.css',
})
export class ClienteForm {
  
  private fb = inject(FormBuilder);
  private clienteService = inject(ClientesService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // formulario
  clienteForm!: FormGroup;

  // edición
  codigoCliente: number | null = null;
  editando = false;

  // inicializador del componente
  ngOnInit(): void {
    this.buildForm();
  }

  // método vacio para construir nuestro grupo de formulario
  buildForm(): void {
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      dui: ['', [Validators.required, Validators.pattern(/^\d{8}-\d$/)]], // expresiones regulares
      telefono: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{4}$/)]],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.maxLength(150)],
      estado: ['Activo', [Validators.required]]
    });
  }

  // método vacio para almacenar nuestro cliente
  guardar(): void {
    // validar que el formulario sea valido
    if (this.clienteForm.invalid){
      this.clienteForm.markAllAsTouched();
      return;
    } 
    
    // crear nuestro objeto
    const cliente = this.clienteForm.value;

    this.clienteService.saveCliente(cliente);

    // redirija al listado de clientes
    this.router.navigate(['/clientes']);
  }

  // getters
  get nombre(){
    return this,this.clienteForm.get('nombre');
  }

  get dui() {
    return this.clienteForm.get('dui');
  }

  get telefono(){
    return this.clienteForm.get('telefono');
  }

  get correo(){
    return this.clienteForm.get('correo');
  }

  get direccion(){
    return this.clienteForm.get('direccion');
  }

  get estado(){
    return this.clienteForm.get('estado');
  }
}
