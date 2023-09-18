import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar'; 
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    MultiSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextareaModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
