import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: boolean;
  constructor(private as: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

  }
  dataCapture(form){
    this.as
    .login(form.value.semail, form.value.pass)
    .then((data)=>{
      this.router.navigate(['/']);
    })
    .catch((err)=> {
      this.errorMsg = err;
      setTimeout(() => this.errorMsg = false, 3000);
      form.reset();
    });
  }

}
