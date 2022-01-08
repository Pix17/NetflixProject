import { MainSubscribeComponent } from './modules/netflix/components/main-subscribe/main-subscribe.component';
import { LogoComponent } from './modules/netflix/components/logo/logo.component';
import { LanguageButtonComponent } from './modules/netflix/components/language-button/language-button.component';
import { HeadlineComponent } from './modules/netflix/components/headline/headline.component';
import { AboveTheFoldComponent } from './modules/netflix/components/above-the-fold/above-the-fold.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHomepageComponent } from './modules/netflix/pages/main-homepage/main-homepage.component';
import { MainLoginComponent } from './modules/netflix/pages/main-login/main-login.component';
import { LoginFormComponent } from './modules/netflix/components/login-form/login-form.component';
import { ServiceComponent } from './modules/netflix/components/service/service.component';
import { ServiceContentComponent } from './modules/netflix/components/service-content/service-content.component';
import { ServiceMediaComponent } from './modules/netflix/components/service-media/service-media.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FooterComponent } from './modules/netflix/components/footer/footer.component';
import { FaqComponent } from './modules/netflix/components/faq/faq.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    // MainHomepageComponent,
    // MainLoginComponent,
    // LoginFormComponent,
    // ServiceComponent,
    // ServiceContentComponent,
    // ServiceMediaComponent,
    // AboveTheFoldComponent,
    // HeadlineComponent,
    // LanguageButtonComponent,
    // LogoComponent,
    // MainSubscribeComponent,
    // FooterComponent,
    // FaqComponent
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
