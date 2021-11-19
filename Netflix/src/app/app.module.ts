import { MainSubscribeComponent } from './homepage/main-subscribe/main-subscribe.component';
import { LogoComponent } from './homepage/logo/logo.component';
import { LanguageButtonComponent } from './homepage/language-button/language-button.component';
import { HeadlineComponent } from './homepage/headline/headline.component';
import { AboveTheFoldComponent } from './homepage/above-the-fold/above-the-fold.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHomepageComponent } from './homepage/main-homepage/main-homepage.component';
import { MainLoginComponent } from './login/main-login/main-login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ServiceComponent } from './homepage/service/service.component';
import { ServiceContentComponent } from './homepage/service-content/service-content.component';
import { ServiceMediaComponent } from './homepage/service-media/service-media.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FooterComponent } from './homepage/footer/footer.component';
import { FaqComponent } from './homepage/faq/faq.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MainHomepageComponent,
    MainLoginComponent,
    LoginFormComponent,
    ServiceComponent,
    ServiceContentComponent,
    ServiceMediaComponent,
    AboveTheFoldComponent,
    HeadlineComponent,
    LanguageButtonComponent,
    LogoComponent,
    MainSubscribeComponent,
    FooterComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
