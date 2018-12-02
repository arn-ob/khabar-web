import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { AotCompiler } from '@angular/compiler';
import { ReqServiceService } from '../service/req-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  url: any;
  checkout = false;
  constructor(
    private app: AppComponent,
    private req: ReqServiceService
  ) { }

  ngOnInit() {
    this.url = this.req.url;
  }

  click() {
    localStorage.setItem('index', 'false');
    this.app.show();
  }
}
