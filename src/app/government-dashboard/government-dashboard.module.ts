import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GovernmentDashboardPageRoutingModule } from './government-dashboard-routing.module';

import { GovernmentDashboardPage } from './government-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GovernmentDashboardPageRoutingModule
  ],
  declarations: [GovernmentDashboardPage]
})
export class GovernmentDashboardPageModule {}
