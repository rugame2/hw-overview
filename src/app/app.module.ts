import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsPromisesComponent } from './js-promises/js-promises.component';
import { CallbackComponent } from './callback/callback.component';
import { JsownerComponent } from './jsowner/jsowner.component';
import { MaphigherlevelComponent } from './maphigherlevel/maphigherlevel.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShellComponent } from './shared/shell/shell.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    JsPromisesComponent,
    CallbackComponent,
    JsownerComponent,
    MaphigherlevelComponent,
    MainPageComponent,
    ShellComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
