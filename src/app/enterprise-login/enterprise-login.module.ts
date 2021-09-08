import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterpriseLoginPageRoutingModule } from './enterprise-login-routing.module';

import { EnterpriseLoginPage } from './enterprise-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterpriseLoginPageRoutingModule
  ],
  declarations: [EnterpriseLoginPage]
})
export class EnterpriseLoginPageModule {}
