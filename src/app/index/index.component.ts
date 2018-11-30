import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { AotCompiler } from '@angular/compiler';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  checkout = false;
  constructor(
    private app: AppComponent
  ) { }

  ngOnInit() {
  }

  click() {
    localStorage.setItem('index', 'false');
    this.app.show();
  }
}
