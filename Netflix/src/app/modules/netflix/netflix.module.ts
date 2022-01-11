import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './pages/project.components';
import { MainHomepageComponent } from '@app/modules/netflix/pages/main-homepage/main-homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboveTheFoldComponent } from '@app/modules/netflix/components/above-the-fold/above-the-fold.component';
import { HeadlineComponent } from '@app/modules/netflix/components/headline/headline.component';
import { MainSubscribeComponent } from '@app/modules/netflix/components/main-subscribe/main-subscribe.component';
import { FaqComponent } from '@app/modules/netflix/components/faq/faq.component';
import { LogoComponent } from '@app/modules/netflix/components/logo/logo.component';
import { MainLoginComponent } from '@app/modules/netflix/pages/main-login/main-login.component';
import { LoginFormComponent } from '@app/modules/netflix/components/login-form/login-form.component';
import { ServiceComponent } from '@app/modules/netflix/components/service/service.component';
import { ServiceContentComponent } from '@app/modules/netflix/components/service-content/service-content.component';
import { ServiceMediaComponent } from '@app/modules/netflix/components/service-media/service-media.component';
import { LanguageButtonComponent } from '@app/modules/netflix/components/language-button/language-button.component';
import { FooterComponent } from '@app/modules/netflix/components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NetflixRoutingModule } from './netflix-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { SignupRegformComponent } from './components/signup-regform/signup-regform.component';
import { RegformComponent } from './pages/regform/regform.component';
import { ProfilesGateComponent } from './pages/profiles-gate/profiles-gate.component';
import { UsersComponent } from './components/users/users.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { UsHeaderComponent } from './components/us-header/us-header.component';
import { UsMainComponent } from './components/us-main/us-main.component';



@NgModule({
  declarations: [
    ProjectComponent,
    MainHomepageComponent,
    MainLoginComponent,
    AboveTheFoldComponent,
    HeadlineComponent,
    MainSubscribeComponent,
    FaqComponent,
    LogoComponent,
    LoginFormComponent,
    ServiceComponent,
    ServiceContentComponent,
    ServiceMediaComponent,
    LanguageButtonComponent,
    FooterComponent,
    SignupComponent,
    SignupFormComponent,
    SignupRegformComponent,
    RegformComponent,
    ProfilesGateComponent,
    UsersComponent,
    BrowseComponent,
    UsHeaderComponent,
    UsMainComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    NetflixRoutingModule
  ]
})
export class NetflixModule { }
