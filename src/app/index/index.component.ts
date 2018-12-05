import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { AotCompiler } from '@angular/compiler';
import { ReqServiceService } from '../service/req-service.service';
import { Router } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // server url get
  url: any;
  result: any;
  isSign = false;
  // conditions
  checkout = false;
  cart_list = [];
  user_details = [];
  id: any;

  // Entry
  order_id: any;
  o_name: any;
  o_address: any;
  o_phn: any;
  store_order: { [k: string]: any } = {};

  constructor(
    private app: AppComponent,
    private req: ReqServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.url = this.req.url;
    this.order_id = uuid.v4();
    // Check the login and hide the header (Nav Bar)
    if (localStorage.getItem('login') === 'true') {
      this.isSign = true;
      this.id = localStorage.getItem('id');
      const sql = { 'sql': 'SELECT * FROM info WHERE u_id = "' + this.id + '"' };
      this.req.request('return', sql).then(res => {
        this.user_details = res.json()[0];
        console.log(this.user_details);
      });
    }
    this.get_post();
  }

  sign() {
    localStorage.setItem('index', 'false');
    this.app.isIndex(false);
    this.app.isSign(false);
    this.router.navigate(['/login']);
  }

  get_post() {
    const sql = { 'sql': 'CALL `view_public_post`();' };
    this.req.request('return', sql).then(res => {
      // console.log(res.json());
      this.result = res.json();
    });
  }

  // for add to cart
  add(id, name, price) {
    this.cart_list.push({ 'id': id, 'name': name, 'price': price });
    console.log(id);
  }

  process() {
    this.checkout = true;
    console.log(this.cart_list);
    // console.log('Process Start');
    // if (this.cart_list.length === 0) {
    //   this.checkout = false;
    //   console.log('end');
    // } else {
    //   console.log(this.cart_list.pop()); // do process Here
    //   this.process();
    // }
  }

  login_user() {
    console.log('Process Start');
    if (this.cart_list.length === 0) {
      console.log('Finish Upload');
      this.router.navigate(['/into']);
    } else {
      this.store_order = this.cart_list.pop();
      // tslint:disable-next-line:max-line-length
      const sql = { 'sql': 'CALL `order_u`("' + this.order_id + '", "' + this.id + '", "' + this.store_order.price + '", "1", "' + this.o_address + '", "' + this.o_phn + '",  "' + this.store_order.id + '")' };
      console.log(sql);
      this.req.request('status', sql).then(res => {
        if (res.json()[0].status === 'Done') {
          console.log('Done');
          this.login_user();
        }
      });
    }
  }

  guest_user() {
    console.log('Process Start');
    if (this.cart_list.length === 0) {
      console.log('Finish Upload');
      this.checkout = false;
    } else {
      this.store_order = this.cart_list.pop();
      // tslint:disable-next-line:max-line-length
      const sql = { 'sql': 'CALL `order_g`("' + this.order_id + '", "' + this.store_order.price + '", "1", "' + this.o_address + '", "' + this.o_phn + '",  "' + this.store_order.id + '")' };
      console.log(sql);
      this.req.request('status', sql).then(res => {
        if (res.json()[0].status === 'Done') {
          console.log('Done');
          this.guest_user();
        }
      });
    }
  }
}
