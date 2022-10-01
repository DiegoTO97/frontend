import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  login(){
    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
    }

    this.auth.loginUser(user).subscribe(
      (response: any) => {

        const token = response.headers.get('authorization').split(" ")[1];
        localStorage.setItem("token", token);
        localStorage.setItem("user",  JSON.stringify(response));
        console.log(token);
        this.router.navigate(['/home']);
        alert("login");
      },
      (error) => {
        alert(error.responseJSON.message);
        console.log(error);
      }
    );
  }

}
