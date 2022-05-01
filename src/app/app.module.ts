import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeverComponent } from './lever/lever.component';
import { HttpClientModule } from '@angular/common/http';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AboutComponent } from './main-menu/about/about.component';
import { VideosComponent } from './main-menu/videos/videos.component';
import { HomeComponent } from './main-menu/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LockScreenComponent,
    LeverComponent,
    MainMenuComponent,
    PageNotFoundComponent,
    NotAuthorizedComponent,
    AboutComponent,
    VideosComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
