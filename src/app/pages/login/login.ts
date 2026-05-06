import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);

    loginForm!: FormGroup;
    mensajeError = '';

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.loginForm = this.fb.group({
        correo: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    }

    ingresar(): void{
      if(this.loginForm.invalid){
        this.loginForm.markAllAsTouched();
        return;
      }

      this.authService.login(this.loginForm.value).subscribe({
        next: (resp) => {
          this.authService.guardarToken(resp.token);
          this.router.navigate(['/dashboard'])
        },
        error: () => {
          this.mensajeError = 'Correo o contraseña incorrectos'
        },
      })
    }


    // getters
    get correo() {
      return this.loginForm.get('correo');
    }

    get password() {
      return this.loginForm.get('password');
    }
}
