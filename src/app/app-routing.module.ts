import { AuthGuard } from './authentication/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LogActivityComponent } from './pages/log-activity/log-activity.component';
const routes: Routes = [
  {path: 'Home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'Register', component: RegisterComponent},
  {path: 'LogActivity', component: LogActivityComponent},
  {path: 'Login', component: LoginComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
