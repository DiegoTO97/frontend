import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/private/home-page/home-page.component';
import { LoginComponent } from './components/public/login/login.component';

//Componentes
import { MenuComponent } from './components/public/menu/menu.component';
import { RegisterComponent } from './components/public/register/register.component';

//Servicios
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
