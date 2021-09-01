import { Injectable } from '@angular/core';
import { IText } from './text.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  englishText: IText = {
    title:'Login',
    userNameLabel:'Username',
    userNamePlaceholder:'Enter username...',
    userPwdLabel: 'Password',
    userPwdPlaceholder: 'Enter password...',
    loginBtn: 'Login',
    selectedLanguage: 'Choose language'
  }

  serbianText: IText = {
    title:'Uloguj se',
    userNameLabel:'Korisničko ime',
    userNamePlaceholder:'Unesite korisničko ime...',
    userPwdLabel: 'Lozinka',
    userPwdPlaceholder: 'Unesite lozinku...',
    loginBtn: 'Uloguj se',
    selectedLanguage: 'Izaberi jezik'
  }

  getText(language: string): IText | void {
    switch(language){
      case 'english':
        return this.englishText;
        break;
      case 'serbian':
        return this.serbianText;
        break;
      default:
        console.log('Invalid input')
    }
  }


}
