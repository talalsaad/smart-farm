import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInUpComponent } from './components/sign-in-up/sign-in-up.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: SignInUpComponent },
  { path: 'dashboard', component: DashbordComponent,canActivate: [AuthGuard] },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
