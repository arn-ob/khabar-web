import { AppComponent } from './../app.component';
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

  // show filename
  filename = 'Choose Image';

  constructor(
    private req: ReqServiceService,
    private route: Router,
    private app: AppComponent
  ) { }

  ngOnInit() {
    this.url = this.req.url;
  }

  // sign up section
  reg() {
    this.in = false;
  }

  select(events) {
    this.image = events;
    this.filename = events.target.files[0].name;
  }

  signup() {
    if (this.image === undefined) {
      console.log('problem');
    } else {
      this.upload_info();
    }
  }

  // 1st step
  upload_info() {
    const u_id = uuid.v4(this.email);
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'CALL `signup`("' + this.user + '","' + this.pass + '","' + this.email + '","' + this.add1 + '","' + this.add2 + '","' + this.city + '","' + u_id + '","' + this.name + '")' };
    console.log(sql);
    this.req.request('return', sql).then(
      response => {
        this.upload_pictue();
        console.log(response.json());
      });
  }

  // 2nd step
  upload_pictue() {
      const file = this.image.target.files[0];
      console.log(file);
      const filename = this.name + '-' + this.user;
      this.req.picture_upload('upload', file, filename, 'img_profile').then(res => {
        if (res.text() === 'true') {
          console.log('done');
          this.clear();
          this.in = true;
        } else {
          console.log('fail');
        }
      });
  }

  clear() {
    this.filename = 'Choose Image';
    this.image = undefined;
    this.email = undefined;
    this.name = undefined;
    this.user = undefined;
    this.pass = undefined;
    this.add1 = undefined;
    this.add2 = undefined;
    this.city = undefined;
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
        this.app.isSign(true);
        this.route.navigate(['/into']);
      }
    );
  }


}
