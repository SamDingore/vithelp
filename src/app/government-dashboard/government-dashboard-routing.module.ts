import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GovernmentDashboardPage } from './government-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: GovernmentDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GovernmentDashboardPageRoutingModule {}
