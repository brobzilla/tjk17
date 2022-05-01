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
import { DashboardComponent } from './main-menu/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list';



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
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
