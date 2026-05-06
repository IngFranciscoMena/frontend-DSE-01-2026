import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { ClientesList } from './features/clientes/pages/clientes-list/clientes-list';
import { TiposCuentaList } from './features/tipos_cuenta/pages/tipos-cuenta-list/tipos-cuenta-list';
import { CuentasList } from './features/cuentas/pages/cuentas-list/cuentas-list';
import { ClienteForm } from './features/clientes/pages/cliente-form/cliente-form';
import {  Login } from  './pages/login/login'
import { authGuard }  from './core/guards/auth-guard'

export const routes: Routes = [
  { path: 'login', component: Login},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard]},
  // rutas de clientes
  { path: 'clientes', component: ClientesList, canActivate: [authGuard]},
  { path: 'clientes/nuevo', component: ClienteForm, canActivate: [authGuard]},
  { path: 'clientes/editar/:codigo', component: ClienteForm, canActivate: [authGuard]},
  // rutas de tipos cuenta
  { path: 'tipos-cuenta', component: TiposCuentaList, canActivate: [authGuard]},
  // rutas de cuentas
  { path: 'cuentas', component: CuentasList, canActivate: [authGuard]},
  // cualquier otra ruta redirija al componente login
  {path: '**', redirectTo: 'login'}
];
