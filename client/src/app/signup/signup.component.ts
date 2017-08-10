import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/session.service';
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import {environment} from '../../environments/environment';
import $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  BASE_URL:string=`${environment.BASE_URL}/api/auth`;
  uploader: FileUploader = new FileUploader({
    url: `${this.BASE_URL}/signup`
   });

  error: string;
  username:string;
  password:string;
  newUser = {
    username: '',
    password: '',
    name: '',
    avatarImage: '',
    lastname: '',
    email: '',
    city: '',
    description: '',
    birthdate: new Date()
  };

  start = '';

  constructor(private session: SessionService, private router: Router) { }
  ngOnInit() {
  }



  signup() {
    console.log(this.newUser);
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', this.newUser.username);
      form.append('password', this.newUser.password);
      form.append('name', this.newUser.name);
      form.append('avatarImage', this.newUser.avatarImage);
      form.append('lastname', this.newUser.lastname);
      form.append('email', this.newUser.email);
      form.append('city', this.newUser.city);
      form.append('description', this.newUser.description);
      form.append('birthdate', this.newUser.birthdate);
    };
    this.uploader.uploadAll();
    this.router.navigate(["/home"])
  }

  logout() {
    this.session.logout()
      .subscribe(
        (user) => console.log(`${user} has logged out`),
        (err) => this.error = err
      );
}
}
