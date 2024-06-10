import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';





@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        CardModule,
        InputTextModule,
        ReactiveFormsModule,
        ButtonModule,
        ToastModule,
        MessageService,
        BrowserAnimationsModule], 
        providers: [MessageService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
