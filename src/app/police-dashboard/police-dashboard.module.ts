import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliceDashboardPageRoutingModule } from './police-dashboard-routing.module';

import { PoliceDashboardPage } from './police-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliceDashboardPageRoutingModule
  ],
  declarations: [PoliceDashboardPage]
})
export class PoliceDashboardPageModule {}
