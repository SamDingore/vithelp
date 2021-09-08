import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterpriseLoginPage } from './enterprise-login.page';

const routes: Routes = [
  {
    path: '',
    component: EnterpriseLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterpriseLoginPageRoutingModule {}
