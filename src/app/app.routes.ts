import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { ClientesList } from './features/clientes/pages/clientes-list/clientes-list';
import { TiposCuentaList } from './features/tipos_cuenta/pages/tipos-cuenta-list/tipos-cuenta-list';
import { CuentasList } from './features/cuentas/pages/cuentas-list/cuentas-list';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'clientes', component: ClientesList},
  { path: 'tipos-cuenta', component: TiposCuentaList},
  { path: 'cuentas', component: CuentasList}
];
