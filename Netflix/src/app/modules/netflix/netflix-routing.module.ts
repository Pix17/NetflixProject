import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomepageComponent } from '@app/modules/netflix/pages/main-homepage/main-homepage.component';
import { MainLoginComponent } from '@app/modules/netflix/pages/main-login/main-login.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ProfilesGateComponent } from './pages/profiles-gate/profiles-gate.component';
import { ProjectComponent } from './pages/project.components';
import { RegformComponent } from './pages/regform/regform.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
    {
        path: '',
        component: ProjectComponent,
        children: [
          { path: '', component: MainHomepageComponent },
          { path: 'login', component: MainLoginComponent },
          { path: 'signup', component: SignupComponent },
          { path: 'regform', component: RegformComponent },
          { path: 'ProfilesGate', component: ProfilesGateComponent },
          { path: 'Browse', component: BrowseComponent },
          { path: 'Add-User', component: AddUserComponent },

        ],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetflixRoutingModule {}
