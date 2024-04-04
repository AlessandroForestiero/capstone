import { IAccessData } from './../models/i-access-data';
import { LoginComponent } from './../pages/login/login.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ObservableInput, map, tap } from 'rxjs';
import { iUser } from '../models/iUser';
import { iLogin } from '../models/iLogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper:JwtHelperService = new JwtHelperService();

  authSubject = new BehaviorSubject<IAccessData | null>(null);

  user$=this.authSubject.asObservable();

  isLoggedIn$ = this.user$.pipe(map(user=>Boolean(user)));

  apiUrl: string = 'http://localhost:8080/auth';

  constructor(private http: HttpClient,private router:Router) {
    this.restoreUser()
  }

  register(user: iUser): Observable<IAccessData> {
    return this.http.post<IAccessData>(this.apiUrl + '/register', user);
  }
  login(login: iLogin): Observable<IAccessData> {
    return this.http.post<IAccessData>(this.apiUrl + '/login', login)
    .pipe(tap(data=>{
      this.authSubject.next(data);
      localStorage.setItem('accessData', JSON.stringify(data));
      this.autoLogout(data.token);
    }))

  }
  autoLogout(jwt:string){
    const expDate=this.jwtHelper.getTokenExpirationDate(jwt) as Date;
   const expMS=expDate.getTime()-new Date().getTime();
   setTimeout(()=>{
     this.logout();
   },expMS);
  }
  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/login']);
  }
  restoreUser(){
    const userJson:string|null = localStorage.getItem('accessData')
    if(!userJson) return;
    const accessData:IAccessData = JSON.parse(userJson);
    if(this.jwtHelper.isTokenExpired(accessData.token)) return;
    this.autoLogout(accessData.token);
    this.authSubject.next(accessData);
  }
}
