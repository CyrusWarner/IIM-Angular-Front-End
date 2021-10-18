import { AuthGuard } from './components/authentication/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { HttpClientModule } from '@angular/common/http';
import { AccountService } from './services/account/account-service.ts.service';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  ],

  providers: [AccountService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
