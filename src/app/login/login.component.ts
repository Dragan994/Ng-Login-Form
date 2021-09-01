import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { IText } from './text.interface';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router ){}

  loginService = new LoginService();

  text!: IText | void;
 
  loginForm = new FormGroup({
    userName : new FormControl(''),
    userPassword : new FormControl('')
  })




  submitLoginForm(): void {
   const UserCredentials = this.loginForm.value; 
   console.log(UserCredentials);
   this.router.navigate(['/welcome'])
  }

  changeTextLanguage(language: string): void {
    this.text = this.loginService.getText(language)
  }
  ngOnInit(): void {
    this.text = this.loginService.getText('english')
  }

}
