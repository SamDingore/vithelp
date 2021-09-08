import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'otp-sign-in',
    loadChildren: () => import('./otp-sign-in/otp-sign-in.module').then( m => m.OtpSignInPageModule)
  },
  {
    path: 'verify-otp',
    loadChildren: () => import('./verify-otp/verify-otp.module').then( m => m.VerifyOtpPageModule)
  },  {
    path: 'enterprise',
    loadChildren: () => import('./enterprise/enterprise.module').then( m => m.EnterprisePageModule)
  },
  {
    path: 'enterprise-signup',
    loadChildren: () => import('./enterprise-signup/enterprise-signup.module').then( m => m.EnterpriseSignupPageModule)
  },
  {
    path: 'enterprise-login',
    loadChildren: () => import('./enterprise-login/enterprise-login.module').then( m => m.EnterpriseLoginPageModule)
  },
  {
    path: 'doctor-dashboard',
    loadChildren: () => import('./doctor-dashboard/doctor-dashboard.module').then( m => m.DoctorDashboardPageModule)
  },
  {
    path: 'government-dashboard',
    loadChildren: () => import('./government-dashboard/government-dashboard.module').then( m => m.GovernmentDashboardPageModule)
  },
  {
    path: 'police-dashboard',
    loadChildren: () => import('./police-dashboard/police-dashboard.module').then( m => m.PoliceDashboardPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
