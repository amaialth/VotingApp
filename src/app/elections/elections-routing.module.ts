import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectionsComponent } from './elections.component';

const routes: Routes = [
  {
    path: '', component: ElectionsComponent,
    children: [
      /* {
      path: 'dashboard',
      loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionsRoutingModule { }
