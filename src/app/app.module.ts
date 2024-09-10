import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { PdsButtonComponent } from './components/pds-button/pds-button.component'

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    PdsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
