import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginPageComponent } from './auth/login-page/login-page.component';


const routes: Routes = [
  {
    path: 'elections',
    loadChildren: () => import('./elections/elections.module').then(m => m.ElectionsModule),
    canActivate: [AuthGuard]
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
