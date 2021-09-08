import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterpriseSignupPage } from './enterprise-signup.page';

const routes: Routes = [
  {
    path: '',
    component: EnterpriseSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterpriseSignupPageRoutingModule {}
