import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomepageComponent } from '@app/modules/netflix/pages/main-homepage/main-homepage.component';
import { MainLoginComponent } from '@app/modules/netflix/pages/main-login/main-login.component';
import { ProjectComponent } from './pages/project.components';


const routes: Routes = [
    {
        path: '',
        component: ProjectComponent,
        children: [
          { path: '', component: MainHomepageComponent },
          { path: 'login', component: MainLoginComponent }
        ],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetflixRoutingModule {}
