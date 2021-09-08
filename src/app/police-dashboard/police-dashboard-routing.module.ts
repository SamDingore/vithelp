import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliceDashboardPage } from './police-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PoliceDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliceDashboardPageRoutingModule {}
