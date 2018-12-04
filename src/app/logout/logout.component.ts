import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private app: AppComponent,
    private route: Router
  ) { }

  ngOnInit() {
    this.app.isIndex(true);
    this.app.isSign(false);
    this.route.navigate(['/']);
  }

}
