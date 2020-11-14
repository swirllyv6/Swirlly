import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
var firebaseConfig = {
  apiKey: "AIzaSyCwgTVXSwsVlwT-4yGML-YZ08PwgP-tAgQ",
  authDomain: "swirllymaster-fb770.firebaseapp.com",
  databaseURL: "https://swirllymaster-fb770.firebaseio.com",
  projectId: "swirllymaster-fb770",
  storageBucket: "swirllymaster-fb770.appspot.com",
  messagingSenderId: "982552217142",
  appId: "1:982552217142:web:530914c7f5f87825d83a97",
  measurementId: "G-BX0VBJK8VQ"
};
AngularFireModule.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutComponent,
    MethodologyComponent,
    PortfolioComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
