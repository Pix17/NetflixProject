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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MainHomepageComponent,
    MainLoginComponent,
    AboveTheFoldComponent,
    HeadlineComponent,
    LanguageButtonComponent,
    LogoComponent,
    MainSubscribeComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
