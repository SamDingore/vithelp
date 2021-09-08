import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterpriseSignupPageRoutingModule } from './enterprise-signup-routing.module';

import { EnterpriseSignupPage } from './enterprise-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterpriseSignupPageRoutingModule
  ],
  declarations: [EnterpriseSignupPage]
})
export class EnterpriseSignupPageModule {}
