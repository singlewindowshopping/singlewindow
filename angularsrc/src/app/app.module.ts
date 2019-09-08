import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent  } from './app.component';
import { UsaComponent } from './usa/usa.component';
import { IndiaComponent } from './india/india.component';
import { ChinaComponent } from './china/china.component';
import { UkComponent } from './uk/uk.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {path:'', component: UsaComponent},
  {
    path: 'USA',
    component: UsaComponent
  },
  {
    path: 'India',
    component: IndiaComponent
  },
  {
    path: 'China',
    component: ChinaComponent
  },
  {
    path: 'Uk',
    component: UkComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent, canActivate:[AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
   {
    path: 'about',
    component: AboutComponent
  },
  { path: '**', component: UsaComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    UsaComponent,
    IndiaComponent,
    ChinaComponent,
    UkComponent,
    NavbarComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [RouterModule.forRoot(routes)],
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent],
   exports: [RouterModule]
})
export class AppModule { }
