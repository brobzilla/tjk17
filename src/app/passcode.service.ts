import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PasscodeService {

  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  private validateLeversUrl = 'api/levers';  


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }



  validateLevers(leverState:Array<string>):Observable<boolean> {
    return this.http.post<boolean>(this.validateLeversUrl, leverState)
  }

}
