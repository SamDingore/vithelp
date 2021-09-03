import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpSignInPage } from './otp-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: OtpSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpSignInPageRoutingModule {}
