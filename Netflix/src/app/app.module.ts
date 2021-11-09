import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHomepageComponent } from './homepage/main-homepage/main-homepage.component';
import { MainLoginComponent } from './login/main-login/main-login.component';
import { ServiceComponent } from './homepage/service/service.component';
import { ServiceContentComponent } from './homepage/service-content/service-content.component';
import { ServiceMediaComponent } from './homepage/service-media/service-media.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHomepageComponent,
    MainLoginComponent,
    ServiceComponent,
    ServiceContentComponent,
    ServiceMediaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
