import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeverGuard } from './lever.guard';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AboutComponent } from './main-menu/about/about.component';
import { VideosComponent } from './main-menu/videos/videos.component';
import { DashboardComponent } from './main-menu/dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: 'm',
    canActivate: [LeverGuard],
    component: MainMenuComponent,
    children:[
      { path: 'home', canActivate: [LeverGuard], component: DashboardComponent},
      { path: 'about', canActivate: [LeverGuard], component: AboutComponent},
      { path: 'videos', canActivate: [LeverGuard], component: VideosComponent},
    ]
  },
  { path: 'lockscreen', component: LockScreenComponent},
  { path: 'notauthorized', component: NotAuthorizedComponent},
  { path: '',   redirectTo: '/m', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
