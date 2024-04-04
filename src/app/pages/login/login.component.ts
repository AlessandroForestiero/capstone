import { Component } from '@angular/core';
import { iLogin } from '../../models/iLogin';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

constructor(private authSvc:AuthService,private router:Router){}

loginData:iLogin= {
  userName:'',
  password: ''
}
login(){
  this.authSvc.login(this.loginData).subscribe(res=>{
    alert(`Utente ${res.userName} si è loggato`);
    this.router.navigate(['']);
  })

}
}

