import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { ClientesList } from './features/clientes/pages/clientes-list/clientes-list';
import { TiposCuentaList } from './features/tipos_cuenta/pages/tipos-cuenta-list/tipos-cuenta-list';
import { CuentasList } from './features/cuentas/pages/cuentas-list/cuentas-list';
import { ClienteForm } from './features/clientes/pages/cliente-form/cliente-form';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  // rutas de clientes
  { path: 'clientes', component: ClientesList},
  { path: 'clientes/nuevo', component: ClienteForm},
  { path: 'clientes/editar/:codigo', component: ClienteForm},
  // rutas de tipos cuenta
  { path: 'tipos-cuenta', component: TiposCuentaList},
  // rutas de cuentas
  { path: 'cuentas', component: CuentasList}
];
