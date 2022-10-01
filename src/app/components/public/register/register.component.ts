import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup 
  private genderBand = 0;

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) { 
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      confirmationPassword: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', Validators.required],
      gender: [''],
    })
  }

  ngOnInit(): void {
  }

  isFemale(): void{
    this.genderBand = 1;
  }

  isMale(): void{
    this.genderBand = 0;
  }

  register(){
    this.form.value.gender = this.genderBand;
    const user = {
      fullName: this.form.value.fullName,
      password: this.form.value.password,
      confirmationPassword: this.form.value.confirmationPassword,
      email: this.form.value.email,
      birthday: this.form.value.birthday,
      phone: this.form.value.phone,
      gender: this.form.value.gender
    }

    console.log(user);

    this.auth.registerUser(user).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/menu']);
        alert("New user registered");
      },
      (error) => {
        alert(error.responseJSON.message);
        console.log(error);
      }
    );
  }

}
