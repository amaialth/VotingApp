import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { AuthGuard } from './helpers/auth.gaurd';

const routes: Routes = [
  {
    path: 'elections',
    loadChildren: () => import('./elections/elections.module').then(m => m.ElectionsModule),
   // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
