import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeverGuard } from './lever.guard';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';


const appRoutes: Routes = [
  { path: 'main',        canActivate: [LeverGuard], component: MainMenuComponent },
  { path: 'lockscreen', component: LockScreenComponent},
  { path: 'notauthorized', component: NotAuthorizedComponent},
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
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
