import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonWithLoadersModule } from 'projects/button-with-loaders/src/lib/button-with-loaders.module';
import { LoadersModule } from 'projects/button-with-loaders/src/lib/loaders.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadersModule,
    ButtonWithLoadersModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
