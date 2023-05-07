import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuSaludFinancieraComponent } from './tu-salud-financiera/tu-salud-financiera.component';
import { MenuComponent } from './menu/menu.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignInComponent,
    MenuComponent,
    TuSaludFinancieraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ImageModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
