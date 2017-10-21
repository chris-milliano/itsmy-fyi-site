import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/sign-up', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
