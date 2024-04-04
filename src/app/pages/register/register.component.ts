import { Component } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { iUser } from '../../models/iUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  user: iUser = {
    name:'',
    surname:'',
    email:'',
    username:'',
    password:'',
  };

  constructor(private register:AuthService) {}

  registerUser() {
    this.register.register(this.user).subscribe(
      (response) => {
        this.user.id=response.userId
        console.log('Registrazione avvenuta con successo:', response);
      },
      (error) => {
        console.error('Errore durante la registrazione:', error);
      }
    );
    console.log(this.user);

  }
}
