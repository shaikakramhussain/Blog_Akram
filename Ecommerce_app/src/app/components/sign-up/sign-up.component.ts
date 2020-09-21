import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  errorMsg: boolean;
  constructor(private as: AuthenticationService, private user: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

  }
  dataCapture(form){
    this.as
    .signUp(form.value.semail, form.value.pass)
    .then((data)=>{
      this.user.addNewUser(data.user.uid,form.value.name,form.value.semail, form.value.pass);
      this.router.navigate(['/']);
    })
    .catch((err)=> {
      this.errorMsg = err;
      setTimeout(() => this.errorMsg = false, 3000);
      form.reset();
    });
  }
}
