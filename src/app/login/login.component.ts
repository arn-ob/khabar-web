import { Component, OnInit } from '@angular/core';
import { ReqServiceService } from '../service/req-service.service';
import { Router } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  in = true;
  url: any;
  // sign in
  username: any;
  password: any;
  return_store: { [k: string]: any } = {};

  // sign up
  u_id: any;
  image: any;
  email: any;
  name: any;
  user: any;
  pass: any;
  add1: any;
  add2: any;
  city: any;

  constructor(
    private req: ReqServiceService,
    private route: Router
  ) { }

  ngOnInit() {
    this.url = this.req.url;
  }

  // sign up section
  reg() {
    this.in = false;
  }

  select(event) {
    this.image = event;
  }


  upload_pictue() {
    const file = this.image.target.files[0];
    const filename = this.name + '-' + this.user;
    this.req.picture_upload('upload', file, filename, 'img_profile').then(res => {
      if (res.text() === 'true') {
        console.log('done');
        this.upload_info();
      } else {
        console.log('fail');
      }
    });
  }


  signup() {
    this.upload_pictue();
  }

  upload_info() {
    const u_id = uuid.v4(this.email);
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'CALL `signup`("' + this.user + '","' + this.pass + '","' + this.email + '","' + this.add1 + '","' + this.add2 + '","' + this.city + '","' + u_id + '","' + this.name + '")'};
    console.log(sql);
    this.req.request('return', sql).then(
      response => {
        console.log(response.json());
      });
  }


  // sign in section
  login() {
    const sql = { 'sql': 'CALL `login`("' + this.username + '", "' + this.password + '")' };
    console.log(sql);
    this.req.request('return', sql).then(
      response => {
        this.return_store = response.json()[0];
        localStorage.setItem('login', 'true');
        localStorage.setItem('id', this.return_store.id);
        this.route.navigate(['/']);
        console.log(this.return_store);
      }
    );
  }


}
