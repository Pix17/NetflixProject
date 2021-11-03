import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHomepageComponent } from './homepage/main-homepage/main-homepage.component';
import { MainLoginComponent } from './login/main-login/main-login.component';
import { FooterComponent } from './homepage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHomepageComponent,
    MainLoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
