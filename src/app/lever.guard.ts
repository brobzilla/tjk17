import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PasscodeService } from './passcode.service';

@Injectable({
  providedIn: 'root'
})
export class LeverGuard implements CanActivate {
  
  constructor(private passcodeService: PasscodeService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('AuthGuard#canActivate called');
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): true|UrlTree {
    if (this.passcodeService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.passcodeService.redirectUrl = url;

    // Redirect to the login page
    return this.router.parseUrl('/lockscreen');
  }
}
