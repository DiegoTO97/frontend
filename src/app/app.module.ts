import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { HomePageComponent } from './components/private/home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './components/public/menu/menu.component';

//Servicios
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard],
  
  bootstrap: [AppComponent],
})

export class AppModule { }
