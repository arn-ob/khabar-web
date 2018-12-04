import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { AotCompiler } from '@angular/compiler';
import { ReqServiceService } from '../service/req-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // server url get
  url: any;

  // conditions
  checkout = false;

  constructor(
    private app: AppComponent,
    private req: ReqServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.url = this.req.url;
  }

  sign() {
    localStorage.setItem('index', 'false');
    this.app.isIndex(false);
    this.app.isSign(false);
    this.router.navigate(['/login']);

  }
}
