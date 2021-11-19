import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomepageComponent } from './homepage/main-homepage/main-homepage.component';
import { MainLoginComponent } from './login/main-login/main-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainHomepageComponent,
  },
  {
    path: 'login',
    component: MainLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
