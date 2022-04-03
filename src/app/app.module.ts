import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LambdaUiModule } from 'projects/lambda-ui/src/lib/lambda-ui.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LambdaUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
