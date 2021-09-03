import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpSignInPageRoutingModule } from './otp-sign-in-routing.module';

import { OtpSignInPage } from './otp-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpSignInPageRoutingModule
  ],
  declarations: [OtpSignInPage]
})
export class OtpSignInPageModule {}
